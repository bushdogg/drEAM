<template>
  <v-parallax
    :height="height"
    :src="src"
    :class="classes"
  >
    <slot name="default" />
  </v-parallax>
</template>

<script>
  export default {
    name: 'alpha-hero',

    props: {
      src: String,
      dark: Boolean,
      height: {
        type: [Number, String],
        default: '100vh'
      },
      light: Boolean
    },
    computed: {
      classes () {
        return {
          'parallax--dark': this.dark,
          'parallax--light': this.light
        }
      }
    }
  }
</script>

<style lang="stylus">
  .parallax--dark,
  .parallax--light
    .parallax__image-container:after
      bottom: 0
      content: ''
      position: absolute
      left: 0
      right: 0
      top: 0
      z-index: 1

  .parallax
    &--light &__image-container:after
      background: linear-gradient(to top, rgba(#fff, .8), rgba(#fff, .9))

    &--dark &__image-container:after
      background: linear-gradient(to top, rgba(13, 3, 29, .85), rgba(25, 25, 38, .85))
</style>
