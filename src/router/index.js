/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Paths from './paths'

Vue.use(Router)

// Function to create routes
// Is default lazy but can be changed
function route (obj) {
  return {
    path: `/${obj.path}`,
    meta: obj.meta,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/views/${obj.view}.vue`
    )
  }
}

const routes = Paths.map(r => route(r))

routes.push({ path: '*', redirect: '/' })

// Create a new router
const router = new Router({
  mode: 'hash',
  routes
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    id: process.env.GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
