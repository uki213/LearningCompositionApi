<template>
  <section>
    <h1 class="header header--size1">
      ページタイトル
    </h1>
    <IndexNameInput
      :name="state.name"
      @input="method.inputName"
    />
    <IndexPriceInput
      :price="state.price"
      @input="method.inputPrice"
    />
    <IndexDisplayApi :api-result-text="state.text" />
    <IndexDisplayStore />
    <IndexModalTest />
  </section>
</template>

<script>
import { defineComponent, reactive } from '@vue/composition-api'
import axios from '@/axios' // axiosを使用する際は明示的にimportする。vueインスタンスに追加しない

export default defineComponent({
  components: { // コンポーネントの定義方法は同じ
    // 今後モジュールのimportが増えそうなので、コンポーネントは下記のような感じで書くほうが良いかも
    IndexNameInput: () => import('./IndexNameInput.vue'),
    IndexPriceInput: () => import('./IndexPriceInput.vue'),
    IndexDisplayApi: () => import('./IndexDisplayApi.vue'),
    IndexDisplayStore: () => import('./IndexDisplayStore.vue'),
    IndexModalTest: () => import('./IndexModalTest.vue')
  },
  setup() {
    const state = reactive({
      name: 'てすと',
      price: 1000,
      text: ''
    })

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

    // このinit関数はsetup関数からreturnしないので、methodには含めない。
    function init() {
      axios.get('/json/test.json').then((reslut) => {
        state.text = reslut.data.text
      })
    }

    init()

    return {
      state,
      method
    }
  }
})
</script>
