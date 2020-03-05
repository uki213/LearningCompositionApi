<template>
  <section>
    <h1 class="header header--size1">
      ページタイトル
    </h1>
    <IndexNameInput
      :name="data.name"
      @input="method.inputName"
    />
    <IndexPriceInput
      :price="data.price"
      @input="method.inputPrice"
    />
    <IndexDisplayApi :api-result-text="data.text" />
    <IndexDisplayStore />
    <IndexEmitTest @input="catchEmit" />
  </section>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import axios from '@/axios' // axiosを使用する際は明示的にimportする。vueインスタンスに追加しない

// state（data属性）はsetup()の外に記述する
const state = {
  name: 'てすと',
  price: 1000,
  text: ''
}

/*
  関数が多くなる場合は、メソッドなどにまとめる
  setup関数でreturnする必要があるもの（テンプレートで呼び出す）などをメソッドにまとめ、
  まとめてsetup関数からreturnするほうが良いかも
*/
const method = {
  inputName(value) {
    state.name = value
  },
  inputPrice(value) {
    state.price = value
  }
}

function catchEmit() {
  console.log('Emit cached')
}

// このinit関数はsetup関数からreturnしないので、methodには含めない。
function init() {
  axios.get('/json/test.json').then((reslut) => {
    state.text = reslut.data.text
  })
}

export default defineComponent({
  components: { // コンポーネントの定義方法は同じ
    // 今後モジュールのimportが増えそうなので、コンポーネントは下記のような感じで書くほうが良いかも
    IndexNameInput: () => import('./IndexNameInput.vue'),
    IndexPriceInput: () => import('./IndexPriceInput.vue'),
    IndexDisplayApi: () => import('./IndexDisplayApi.vue'),
    IndexDisplayStore: () => import('./IndexDisplayStore.vue'),
    IndexEmitTest: () => import('./IndexEmitTest.vue')
  },
  setup() {
    const data = reactive(state)
    init()
    return {
      data,
      method,
      catchEmit
    }
  }
})
</script>
