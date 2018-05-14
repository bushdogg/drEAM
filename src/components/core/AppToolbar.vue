<template>
  <v-toolbar app class="primary white--text">
    <v-toolbar-title v-text="$t('title')"/>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <span class="white--text" v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import Toolbar from '../../lang/en/layout/Toolbar'
export default {
    data () {
      return {
         items: Toolbar.items
      }
    },
    
    computed: {
      itemss () {
        console.log(this.$t('layout.Toolbar.items'))
        return this.$t('layout.Toolbar.items')
      }
    }
}
</script>
