import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal'
import List from './views/List'
import Cards from './views/Cards'
import Drawer from './views/Drawer'
import Simple from './views/Simple'
import Stagger from './views/Stagger'
import State from './views/State'
import Timeline from './views/Timeline'
import Master from './views/Master'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: Stagger
    },
    {
      path: '/state',
      name: 'state',
      component: State
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/master',
      name: 'master',
      component: Master
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
