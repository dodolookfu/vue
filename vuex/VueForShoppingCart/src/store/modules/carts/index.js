import shop from '../../../api/shop'

// initial state
const state = {
  cartList: [],
  amount: 0
}

// getters
const getters = {
  getAllCart : state => {
    return state.cartList;
  },
  getAmount : state => {
    return state.amount;
  },
  getTotal : state => {
    let total = 0;
    for(var i in state.cartList){
      total += state.cartList[i].number * state.cartList[i].price;
    }
    return total;
  },
}

// actions
const actions = {
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  delItem({ commit }, product) {
    commit('delItem', product)
  },
  logout({ commit }, product) {
    commit('logout', product)
  },
}

// mutations
const mutations = {
  addToCart(state, product){
    console.log(product);
    const item = state.cartList.find(item => item.id === product.id);
    if(item && product.current!=0){
      item.number = product.current;
    }else if(!item && product.current!=0){
      //state.amount++;
      state.cartList.push({
        id : product.id,
        img : product.img,
        title: product.title,
        price: product.price,
        number: product.current,
      });
      state.amount = state.cartList.length
    }
  },
  delItem(state, product){    
    for(var i in state.cartList){
      if(state.cartList[i].id == product.id){
        state.cartList.splice(i,1);
        //state.amount--;
        state.amount = state.cartList.length
      }
    }
  },
  logout : (state) => {    
    state.cartList=[];
    state.amount=0;
  },  
}

export default {  
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}