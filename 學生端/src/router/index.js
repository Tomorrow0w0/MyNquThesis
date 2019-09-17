import Vue from 'vue'
import Router from 'vue-router'
import HomList from '@/components/HomeList/HomeList'
import AddList from '@/components/AddList/AddList'
import ViewList from '@/components/ViewList/ViewList'
import EditList from '@/components/EditList/EditList'
import Login from '@/components/Login/Login'
import PhoneSignUp from '@/components/PhoneAuth/PhoneSignUp'
import PhoneSetPassword from '@/components/PhoneAuth/PhoneSetPassword'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home-list',
      component: HomList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/phonesignup',
      name: 'phonesignup',
      component: PhoneSignUp,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/phonesetpassword',
      name: 'phonesetpassword',
      component: PhoneSetPassword,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'add-list',
      component: AddList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pg_No?',
      name: 'view-list',
      component: ViewList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:pg_No?',
      name: 'edit-list',
      component: EditList,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Vue導航守衛
router.beforeEach((to, from, next)=>{
  // 檢查是否有身份驗證守衛(requiresAuth)
  if(to.matched.some(record => record.meta.requiresAuth)){
    // Check if Not Logged in
    if(!firebase.auth().currentUser){
      // Go to Login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }else{
      // 繼續路由
      next()
    }
    // 檢查是否為訪客
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    // Check if Logged in
    if(firebase.auth().currentUser){
      // Go to Login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }else{
      // 繼續路由
      next()
    }
  }else{
    // 繼續路由
    next()
  }
})

export default router
