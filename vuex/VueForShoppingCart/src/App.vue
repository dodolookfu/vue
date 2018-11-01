<template>
  <div id="app"> 
    <div class="index-title">SHOPPING CART</div> 
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>

import navbar from '../src/components/navbar.vue'

export default {
  name: 'App',
  components:{
    navbar
  }
}
</script>

<style>
.index-title {
  font-size: 60px;
  font-weight: bold;
  text-shadow: 3px 2px 0px rgb(255, 255, 255), 5px 4px 0px rgba(0,0,0,0.15);
}
#app {
  font-family: 'Microsoft JhengHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
