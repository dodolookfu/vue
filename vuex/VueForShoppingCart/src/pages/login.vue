<template>
  <div class="container">     
    <div class="row">    
      <div class="col"></div> 
      <div class="col-sm-6 mt-3">
        <form class="text-left spacing">
          <label>帳號</label>
          <input type="text" v-model="account" class="form-control" placeholder="輸入帳號">
          <label>密碼</label>
          <input type="text" v-model="password" class="form-control" placeholder="輸入密碼">
          <button class="btn btn-primary" @click="login">確定</button>
        </form>
      </div>
      <div class="col"></div> 
    </div>  
  </div>
</template>

<script>

import store from '../store'

export default {
  data () {
    return {
      account:'',
      password:'',      
    }
  },
  methods : {
    login () {
      console.log(this.account,this.password);      
      // Promise   
      this.$store.dispatch('login/login', {
        account: this.account,
        password: this.password
      })
      .then(() => { // 接收 resolve
        console.log('get resolve');        
        // $router.push
        this.$router.push('/');        
      })
      .catch(() => { // 接收 reject
        alert('帳號或密碼錯誤')
        console.log('get reject!');
      });      
    }  
  }
}
</script>

<style>
  .spacing > * {
    margin-top: 10px
  }
</style>
