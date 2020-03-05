<template>
  <section class="display-store">
    <h2 class="header header--size2 display-store__header">
      Vuex
    </h2>
    <button
      class="button display-store__button"
      @click="method.changeNumber"
    >
      Number
    </button>
    <button
      class="button display-store__button"
      @click="method.changeString"
    >
      String
    </button>
    <button
      class="button button--small button--blue display-store__button"
      @click="method.pushArray"
    >
      Array.Push
    </button>
    <button
      class="button button--small button--blue display-store__button--last"
      @click="method.popArray"
    >
      Array.Pop
    </button>
    <pre class="display-store__content">
    {{ sampleStore }}
    </pre>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
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

export default defineComponent({
  setup() {
    const { sampleStore } = store.state // 必要なstateを抽出してreturnする
    return {
      sampleStore,
      method
    }
  }
})
</script>
