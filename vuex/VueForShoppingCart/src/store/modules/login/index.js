import shop from '../../../api/shop'

// initial state
const state = {
  userInfo : '',
  token:'',
  favoriteList :[]
}

// getters
const getters = {
  getUserInfo : state => {
    return state.userInfo;
  },
  allFavorite: state => {
    return state.favoriteList;
  },
}

// actions
const actions = {
  // login
  login({ commit }, { account, password}) {    
    console.log('login loading');    
    //Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (account === 'admin' && password === 'admin') {
          console.log('go login mutations');
          commit('login',account); 
          resolve(); //resolve
        }
        // error
        else {
          console.log('fail go reject');          
          reject(); //reject
        }
      }, 1000);
    });
  },
  addToFavo({ commit }, product) {
    commit('addToFavo',product);
  },
  logout({ commit }) {
    commit('logout');
  },
  removeFromFavo({ commit }, product) {
    commit('removeFromFavo',product);
  },
}

// mutations
const mutations = {  
  login : (state,account) => {
    console.log(account)
    state.userInfo=account
    state.token=account+'1234567'
  },
  addToFavo : (state,product) => { 
    const item = state.favoriteList.find(item => item.id === product.id);
    if(!item){
      console.log(product.title+' 加入收藏!')
      state.favoriteList.push(product);
    }else{
      console.log(product.title+' 已加入收藏!')
    }
  },
  logout : (state) => {    
    state.userInfo='';
    state.token='';
  },
  removeFromFavo : (state,product) => { 
    for(var i in state.favoriteList){
      if(state.favoriteList[i].id == product.id){
        state.favoriteList.splice(i,1);        
      }
    }
  },
}

export default {  
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}