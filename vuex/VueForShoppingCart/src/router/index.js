import Vue from 'vue'
import Router from 'vue-router'
import products from '@/pages/products'
import cart from '@/pages/cart'
import login from '@/pages/login'
import favo from '@/pages/favoriteList'
import store from '../store'

Vue.use(Router)
// export default
export const router = new Router({
  //mode: 'history',
  //base: __dirname, 
  routes: [
    {
      path: '/',
      name: 'products',
      component: products,
      meta: { requiresAuth: false },
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false },
    },
    {
      path: '/favo',
      name: 'favo',
      component: favo,
      meta: { requiresAuth: false },
    },
    { path: '/*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // 頁面需要驗證 = requiresAuth: true
  console.log(to.fullPath,from.fullPath);  
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {    
    console.log('token?', store.state.login.token);
    if (store.state.login.token === '') {
      // 沒有token轉login
      next({ path: '/login' });
    } else {
      next(); //往下執行
    }
  } else {
    next(); 
  }
});
