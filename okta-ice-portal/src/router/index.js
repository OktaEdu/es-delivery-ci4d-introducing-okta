import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import LoginCallback and navigationGuard
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
// import the Profile component
import ProfileComponent from '@/components/Profile'
// import Appps view
import AppsView from '@/views/Apps'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // new route for the callback
  {
    path: '/login/callback',
    component: LoginCallback
  },
  // add Profile route
  {
    path: '/profile',
    component: ProfileComponent,
  },
  {
    path: '/apps',
    component: AppsView,
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// use navigation guard logic to circumvent nabigational guard mixin issues in vue-router-next
// provided by the Okta Vue SDK
router.beforeEach(navigationGuard)
export default router