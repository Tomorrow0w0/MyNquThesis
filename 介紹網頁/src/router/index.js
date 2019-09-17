import Vue from 'vue'
import Router from 'vue-router'
import OnlyPage from '@/components/OnlyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnlyPage',
      component: OnlyPage
    }
  ]
})
