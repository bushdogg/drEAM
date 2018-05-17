/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Home',
    meta: {
      title: 'dr.EAM',
      description: 'Advanced Oracle EAM UI',
      keywords: 'Oracle, EAM, User Interface'
    }
  },
  {
    path: 'assets',
    // Relative to /src/views
    view: 'Assets',
    meta: {
      title: 'dr.EAM',
      description: 'Advanced Oracle EAM UI',
      keywords: 'Oracle, EAM, User Interface'
    }
  },
  {
    path: 'activities',
    // Relative to /src/views
    view: 'Activities',
    meta: {
      title: 'dr.EAM',
      description: 'Advanced Oracle EAM UI',
      keywords: 'Oracle, EAM, User Interface'
    }
  },
  {
    path: 'configuration',
    // Relative to /src/views
    view: 'Configuration',
    meta: {
      title: 'dr.EAM',
      description: 'Advanced Oracle EAM UI',
      keywords: 'Oracle, EAM, User Interface'
    }
  }
]
