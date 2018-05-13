<template>
  <div class="alpha-gallery">
    <v-tabs class="mb-5">
      <v-tab
        v-for="(category, i) in categories"
        :key="i"
        @click="select(category)"
      >
        <span v-text="category.text" />
      </v-tab>
    </v-tabs>
    <v-container grid-list-xl pa-0>
      <transition-group
        tag="v-layout"
        name="fade-transition"
        class="wrap child-flex"
        style="min-height: 450px"
      >
        <v-flex
          xs4
          v-for="project in computedProjects"
          :key="project.img"
          gallery-card
        >
          <slot
            v-if="$scopedSlots.default"
            :project="project"
          />
          <v-card
            height="200px"
            hover
            class="white--text"
            :img="`/static/${project.img}`"
            @click="genAction(project.action)"
            v-else
          />
        </v-flex>
      </transition-group>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'alpha-gallery',

    data: () => ({
      category: null
    }),

    props: {
      categories: {
        type: Array,
        default: () => []
      },
      projects: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      computedProjects () {
        return !this.category
          ? this.projects
          : this.projects.filter(p => p.categories.includes(this.category))
      }
    },

    methods: {
      genAction (cb) {
        return cb || null
      },
      select (category) {
        this.category = category.filter
      }
    }
  }
</script>

<style scoped>
  .gallery-card {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
  }

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
</style>
