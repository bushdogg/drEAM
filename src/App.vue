<template>
  <v-app>
    <app-toolbar />

    <app-view />

    <app-footer />
  </v-app>
</template>

<script>
  import AppDrawer from '@/components/core/AppDrawer'
  import AppFooter from '@/components/core/AppFooter'
  import AppToolbar from '@/components/core/AppToolbar'
  import AppView from '@/components/core/AppView'
  import AppJumbotron from '@/components/core/AppJumbotron'
  import Meta from '@/mixins/meta'

  export default {
    components: {
      AppDrawer,
      AppFooter,
      AppToolbar,
      AppView,
      AppJumbotron
    },
    mixins: [Meta]
  }
</script>
