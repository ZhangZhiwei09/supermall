import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCounter(state,payload){
      payload.count++
    },
    addToCar(state,payload){
      payload.checked=true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload){
      //Actions可以返回一个Promise
      return new Promise((resolve,reject)=>{
        let oldcommodity=context.state.cartList.find(item=>item.iid===payload.iid)
        if(oldcommodity){
          context.commit('addCounter',oldcommodity)
          resolve('商品数量+1')
        }else{
          payload.count=1
          context.commit('addToCar',payload)
          resolve('添加成功')
        }
        })
    }
  },
  modules: {

  }
})
