<template>
  <div class="container"> 
    
    <div class="row">    
      <div v-for="product in allFavorite" v-bind:key="product.id" class="col-sm-4">
        <img :src="product.img" class="products-img">
        <p>商品名稱：{{ product.title }}</p>
        <p>單價：{{ product.price }}</p>        
        <button class="btn btn-outline-info commonbtn" @click="removeFromFavo(product)">移除收藏</button>
      </div>
    </div>
  
  </div>
</template>

<script>

import store from '../store'

export default {
  computed :{
    allFavorite(){
      return this.$store.getters['login/allFavorite'];
    }
  },
  methods :{    
    removeFromFavo(product) {
      store.commit('login/removeFromFavo',product);
    }
  }
}
</script>

<style>

.products-img {
	width: 100%;
	border: 1px solid #AAA;
	padding: 10px;
}
.products-count-number {
	padding: 10px;
}

.col-sm-4 > * {
  margin-top: 5px;
}

.commonbtn {
  margin-bottom: 11px;
}

</style>
