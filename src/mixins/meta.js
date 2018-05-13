export default {
  data: () => ({
    _description: {},
    _keywords: {}
  }),

  computed: {
    title () {
      return this.$route.meta.title
    },
    description () {
      return this.$route.meta.description
    },
    keywords () {
      return this.$route.meta.keywords
    }
  },

  watch: {
    $route: 'setMeta',
    meta: {
      deep: true,
      handler: 'setMeta'
    }
  },

  mounted () {
    this.bootstrapMeta()
  },

  methods: {
    bootstrapMeta () {
      this._description = document.querySelector('meta[name="description"]')
      this._keywords = document.querySelector('meta[name="keywords"]')

      this.setMeta()
    },
    setMeta () {
      document.title = this.title
      this._description.setAttribute('content', this.description)
      this._keywords.setAttribute('content', this.keywords)
    }
  }
}
