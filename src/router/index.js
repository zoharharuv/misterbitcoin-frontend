import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '../pages/home-page.vue'
import statisticsPage from '../pages/statistics-page.vue'
import signupPage from '../pages/signup-page.vue'
import contactDetails from '../pages/contact-details.vue'
import contactApp from '../pages/contact-app.vue';

import contactEdit from '../components/contact-edit.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
 
  {
    path: '/statistics',
    name: 'Statistics',
    component: statisticsPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signupPage
  },
  {
    path: '/contact/:contactId',
    name: 'ContactDetails',
    component: contactDetails,
  },
  {
    path: '/contact/edit/:contactId',
    name: 'ContactEdit',
    component: contactEdit
  },
  {
    path: '/contact',
    name: 'Contact',
    component: contactApp
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
