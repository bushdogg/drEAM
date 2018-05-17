<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <app-jumbotron />

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AppJumbotron from '@/components/core/AppJumbotron'

  export default {
    components: {
      AppJumbotron
    }
  }
</script>
