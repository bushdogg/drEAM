<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-title v-text="item" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: this.$t('drawerItems')
      }
    }
  }
</script>
