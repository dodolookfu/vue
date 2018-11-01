import shop from '../../../api/shop'

// initial state
const state = {
  productList: []
}

// getters
const getters = {  
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    console.log('getall')
    shop.getProducts(products => {
      commit('setProducts', products)      
    })    
  },
  increment({ commit }, id) {
    commit('increment', id)
  },
  decrement({ commit }, id) {
    commit('decrement', id)
  },  
  search({ commit }, keyword) {
    shop.getProducts(products => {
      commit('search', {keyword:keyword , products:products})    
    })
  },
}


// mutations
const mutations = {
  setProducts (state, products) {    
    state.productList = products
  },
  increment(state, id) {
    const product = state.productList.find(product => product.id === id);
    if(product.inventory>0){
      product.current++;
      product.inventory--;
    }
  },
  decrement(state, id) {
    const product = state.productList.find(product => product.id === id);
    if(product.current>0){
      product.current--;
      product.inventory++;
    }
  },
  search : (state,obj) => {    
    state.productList = obj.products
    if(obj.keyword !==''){
      state.productList = state.productList.filter( product => {
        return product.title.indexOf(obj.keyword) > -1;
      });    
    }
  }
}

export default {  
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}