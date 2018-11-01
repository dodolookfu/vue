<template>  
  <div class="container">
    <div class="text-right mb-2">
      <p v-if="!getUserInfo">
        <router-link to="/login" tag="button" class="btn btn-sm btn-outline-info">Log in</router-link>
      </p>
      <p v-else>
        <button class="btn btn-sm btn-outline-info" @click="logout">Log out</button>
        <router-link to="/favo" tag="button" class="btn btn-sm btn-outline-danger"><i class="fa fa-heart"></i>&nbsp;收藏</router-link>
      </p>
    </div>    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-nav" style="width:100%;">
        <div class="col-sm-4 text-left">
          <a @click="resetProduct"><router-link to="/" tag="a" class="nav-item nav-link">商品列表</router-link></a>          
        </div>
        <div class="col-sm-4">          
          <div class="form-inline">            
            <input type="text" v-model="keyword" class="form-control" placeholder="search..">&nbsp;
            <button class="btn btn-default" @click="search">
              <span><i class="fa fa-search"></i></span>
            </button>           
          </div>          
        </div>
        <div class="col-sm-4 text-right">
          <router-link to="/cart" tag="a" class="nav-item nav-link">購物車&nbsp;
            <i class="fa fa-shopping-cart inline"></i>
            <span class="badge badge-pill badge-danger">{{ getAmount }}</span>            
          </router-link>
        </div>
      </div>
    </nav>
  </div>  
</template>

<script>

import store from '../store'

export default {
  data : () => {
    return {
      keyword:''
    }
  },
  computed:{
    getAmount() {
      return this.$store.getters["carts/getAmount"];
    },  
    getUserInfo() {
      return this.$store.getters["login/getUserInfo"];
    },  
  },
  methods : {
    resetProduct() {
      this.keyword=''
      store.dispatch('products/getAllProducts');
    },
    search() {
      console.log(this.keyword);      
      // if(this.keyword!==''){
      store.dispatch('products/search',this.keyword);
      // }else{
      //   store.dispatch('products/getAllProducts');
      // }
    },
    logout() {
      store.dispatch('carts/logout');
      store.dispatch('login/logout');      
      this.$router.push('/');
    },
  }
}
</script>

<style>

.nav-link {
  display: inline-block;
}

.inline {
  display: inline;
}

</style>
