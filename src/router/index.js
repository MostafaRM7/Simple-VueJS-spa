import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RegisterView from '../views/RegisterView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { loginRequired: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { logoutRedirect: true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    meta: { loginRequired: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { logoutRedirect: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form, next) => {
  if (to.matched.some(record => record.meta.loginRequired)){
    if(store.state.isAuthenticated) {
      next()
    }
    else {
      next('/login')
    }
  }
  else if (to.matched.some(record => record.meta.logoutRedirect))
  {
    if(!store.state.isAuthenticated){
      next()
    }
    else{
      next('/profile')
    }
  }
  else
  {
    next()
  }
})

export default router
