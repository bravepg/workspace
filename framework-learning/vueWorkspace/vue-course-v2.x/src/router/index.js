import Vue from 'vue'
import Router from 'vue-router'
import AsyncError from '@/components/AsyncError'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AsyncError',
      component: AsyncError
    }
  ]
})
