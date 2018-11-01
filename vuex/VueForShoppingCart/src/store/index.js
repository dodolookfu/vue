import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import products from './modules/products'
import carts from './modules/carts'
import login from './modules/login'

Vue.use( Vuex );



export default new Vuex.Store({    
  getters,    
  modules:{
    products,
    carts,
    login
  },    
  strict: true
});