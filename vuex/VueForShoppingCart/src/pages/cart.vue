<template>
  <div class="container mt-3">    
    <div class="row">
      <div class="col-sm-4">選購商品</div>
      <div class="col-sm-2">單價</div>
      <div class="col-sm-2">數量</div>
      <div class="col-sm-2">總計</div>
      <div class="col-sm-2">移除</div>
    </div>
    <hr>
    <div v-if="getAllCart.length > 0">
      <div class="row mt-2" v-for="item in getAllCart" :key="item.id">      
        <div class="col-sm-4">{{ item.title }}</div>
        <div class="col-sm-2">{{ item.price }}</div>
        <div class="col-sm-2">{{ item.number }}</div>
        <div class="col-sm-2">{{ item.price * item.number  }}</div>
        <div class="col-sm-2"><button class="btn btn-outline-dark" @click="delItem(item)"><i class="fa fa-trash"></i></button></div>      
      </div>
    </div>
    <div v-else>
      <h2 class="text-center">無選購商品</h2>
    </div>  
    <hr>  
    <div class="row">
      <div class="col-sm-12 text-right">結帳總金額：{{ getTotal }}元</div>
      <div class="col-sm-12">
        <div class="float-right">
          <button class="btn btn-danger right">結帳</button>
        </div>        
      </div>
    </div>   
  </div>
</template>

<script>

import store from '../store'

export default {
  computed: {
    getAllCart () {
      return this.$store.getters['carts/getAllCart']
    },
    getTotal () {
      return this.$store.getters['carts/getTotal']
    },
  },
  methods:{
    delItem(product){
      store.commit('carts/delItem',product);
    },
    
  }
}
</script>

<style scoped>

.right {
  float: left;
}

.inline > * {
  text-align: center;
  display: inline;
}
</style>