<template>
  <div class="container">
    <div class="row">    
      <div v-for="product in allProducts" v-bind:key="product.id" class="col-sm-4">
        <img :src="product.img" class="products-img">
        <p>商品名稱：{{ product.title }}</p>
        <p>單價：{{ product.price }}</p>          
        <p>數量：
            <button class="btn btn-outline-dark" @click="increment(product.id)">+</button>
            <span class="products-count-number">{{ product.current }}</span>
            <button class="btn btn-outline-dark" @click="decrement(product.id)">-</button>
            剩下數量：{{ product.inventory }}
          </p>
        <button class="btn btn-primary commonbtn" @click="addToCart(product)">加入購物車</button>
        <button class="btn btn-danger commonbtn" @click="addToFavo(product)">加入收藏</button>
      </div>  
    </div>  
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import store from '../store'

export default {
  data : function(){
    return {
      
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.products.productList;
    },
    allCart (){
      return this.$store.state.carts.cartList;
    },
    // test (){      
    //   return this.$store.getters['carts/getAllCart']
    // },
    // ...mapGetters('carts', {
    //   test: 'getAllCart',      
    // })
  },
  created () {
    this.$store.dispatch('products/getAllProducts');
  },
  methods:{
    addCount:function(){
      this.productCount++ ;
    },
    minusCount:function(){
      this.productCount-- ;
    },
    increment: (id) => {
      store.commit('products/increment',id);
    },
    decrement(id){
    	store.commit('products/decrement',id);
    },
    addToCart(product){
      if(this.$store.getters["login/getUserInfo"] !== ''){
        store.commit('carts/addToCart',product);
      }else{
        alert('請先登入!');
      }
    },
    addToFavo(product){
      if(this.$store.getters["login/getUserInfo"] !== ''){
        store.commit('login/addToFavo',product);
      }else{
        alert('請先登入!');
      }
    }
  }  
}
</script>

<style scoped>
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
