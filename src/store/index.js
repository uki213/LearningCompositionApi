import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleStore: {
      testNumber: 0,
      testString: 'test string',
      testArray: ['a', 'b', 'c']
    }
  },
  mutations: {
    changeTestNumber(state) {
      state.sampleStore.testNumber += 1
    },
    changeTestString(state) {
      state.sampleStore.testString += ' addText'
    },
    pushTestArray(state) {
      state.sampleStore.testArray.push('push')
    },
    popTestArray(state) {
      state.sampleStore.testArray.pop()
    }
  },
  actions: {
    changeTestNumber(context) {
      context.commit('changeTestNumber')
    },
    changeTestString(context) {
      context.commit('changeTestString')
    },
    pushTestArray(context) {
      context.commit('pushTestArray')
    },
    popTestArray(context) {
      context.commit('popTestArray')
    }
  },
  modules: {
  }
})
