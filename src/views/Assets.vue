<template>
  <v-card>
    <v-card-title>
      <div class="display-2 primary--text">Assets</div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="assets"
      :pagination.sync="pagination"
      :total-items="totalAssets"
      :loading="loading"
      :search="search"
      class="elevation-1 ma-2"
    >
      <v-progress-linear v-if="loading" slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.organization }}</td>
        <td class="text-xs-left">{{ props.item.asset_number }}</td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">{{ props.item.asset_group }}</td>
        <td class="text-xs-left">{{ props.item.category }}</td>
        <td class="text-xs-left">{{ props.item.owning_department }}</td>
        
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
      <template slot="pageText" slot-scope="props">
        Lines {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        search: '',
        loading: true,
        totalAssets: 0,
        pagination: {},
        headers: [
          {
            text: 'Organization',
            align: 'left',
            sortable: true,
            value: 'organization'
          },
          {
            text: 'Asset Number',
            align: 'left',
            sortable: true,
            value: 'asset_number'
          },
          {
            text: 'Asset Description',
            align: 'left',
            sortable: true,
            value: 'description'
          },
          {
            text: 'Asset Group',
            align: 'left',
            sortable: true,
            value: 'asset_group'
          },
          {
            text: 'Asset Category',
            align: 'left',
            sortable: true,
            value: 'category'
          },
          {
            text: 'Owning Department',
            align: 'left',
            sortable: true,
            value: 'owning_department'
          }
        ],
        assets: []
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.assets = data.items
              this.totalAssets = data.total
            })
        },
        deep: true
      }
    },
      mounted () {
        this.getData(),
        this.getDataFromApi()
          .then(data => {
            this.assets = data.items
            this.totalAssets = data.total
          })
      },
      methods: {
        async getData() {
          try {
                const response = await axios.get(`/assets?include=
                  organization,
                  asset_number,
                  description,
                  asset_group,
                  category,
                  owning_department
                  %organization=H1`)
                this.assets = response.data
                this.loading = false
          } catch(e) {
            console.log(e)
          }
        },
      getDataFromApi: function () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = this.getData()
          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      }
    }
  }
</script>