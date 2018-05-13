<template>
  <v-container grid-list-xl pa-0>
    <v-layout
      row
      wrap
      justify-center
    >
      <v-flex
        xs12
        sm6
        md4
        d-flex
        v-for="(feature, i) in features"
        :key="i"
      >
        <v-card flat tile>
          <v-card-media
            :src="`/static/${feature.img}.png`"
            :height="cardHeight"
          />
          <v-card-title class="title" v-text="feature.title" />
          <v-card-text v-text="feature.text" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'alpha-card-feature',

    props: {
      cardHeight: {
        type: String,
        default: '200px'
      },
      features: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>
