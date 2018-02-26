import Vue from 'vue'
import Router from 'vue-router'
import Bookstep from '../components/bookstep/bookstep.vue'
import Newbook from '../components/newbook.vue'
import Statistics from '../components/statistics/statistics.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/bookstep'
    },
    {
      path: '/1',
      redirect: '/bookstep'
    },
    {
      path: '/2',
      redirect: '/newbook'
    },
    {
      path: '/3',
      redirect: '/statistics'
    },
    {
      path: '/bookstep',
      name: 'Bookstep',
      component: Bookstep
    },
    {
      path: '/newbook',
      name: 'Newbook',
      component: Newbook,
      props: { name: 'world' }
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    }
  ]
})
