<template>
  <section>
    <h2 class="header header--size2">
      Vuex
    </h2>
    <button @click="method.changeNumber">
      Number
    </button>
    <button @click="method.changeString">
      String
    </button>
    <button @click="method.pushArray">
      Array.Push
    </button>
    <button @click="method.popArray">
      Array.Pop
    </button>
    <pre>
    {{ sampleStore }}
    </pre>
  </section>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import store from '@/store' // vuexでstoreにアクセスするためにはimportする。

const method = {
  changeNumber() {
    store.dispatch('changeTestNumber')
  },
  changeString() {
    store.dispatch('changeTestString')
  },
  pushArray() {
    store.dispatch('pushTestArray')
  },
  popArray() {
    store.dispatch('popTestArray')
  }
}

export default createComponent({
  setup() {
    const { sampleStore } = store.state // 必要なstateを抽出してreturnする
    return {
      sampleStore,
      method
    }
  }
})
</script>
