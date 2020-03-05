import Vue from 'vue'
import Vuex from 'vuex'
import Deferred from '@/deferred'

Vue.use(Vuex)

let deferred = null

export default new Vuex.Store({
  state: {
    sampleStore: {
      testNumber: 0,
      testString: 'test string',
      testArray: ['a', 'b', 'c']
    },
    modal: {
      isOpen: false,
      head: '',
      body: '',
      data: {}
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
    },
    // Modal
    changeModalState(state, object) {
      state.modal = object
    },
    resetModalState(state) {
      state.modal = {
        isOpen: false,
        name: '',
        message: '',
        data: {}
      }
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
    },
    // Modal
    modalOpen(context, options) {
      deferred = new Deferred()

      const option = {
        isOpen: true,
        head: '',
        body: '',
        data: {},
        ...options
      }

      context.commit('changeModalState', option)

      deferred.promise.then(
        () => { deferred = null },
        () => { deferred = null }
      )
      return deferred.promise
    },
    modalResolve(context, result = '') {
      deferred.resolve(result)
      context.commit('resetModalState')
    },
    modalReject(context, result = '') {
      deferred.reject(result)
      context.commit('resetModalState')
    }
  },
  modules: {
  }
})
