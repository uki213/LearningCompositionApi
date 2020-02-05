<template>
  <div id="index">
    <h1>ページタイトル</h1>
    <IndexNameInput
      :name="state.name"
      @input="inputName"
    />
    <IndexPriceInput
      :price="state.price"
      @input="inputPrice"
    />
    <IndexDisplayApi :api-result-text="state.text" />
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'
import axios from '@/axios' // axiosを使用する際は明示的にimportする

export default createComponent({
  components: { // コンポーネントの書き方は同じ
    // 今後モジュールのimportが増えそうなので、コンポーネントは下記のような感じで書くほうが良いかも
    IndexNameInput: () => import('./IndexNameInput.vue'),
    IndexPriceInput: () => import('./IndexPriceInput.vue'),
    IndexDisplayApi: () => import('./IndexDisplayApi.vue')
  },
  setup() {
    const state = reactive({
      name: 'てすと',
      price: 1000,
      text: ''
    })

    function inputName(value) {
      state.name = value
    }

    function inputPrice(value) {
      state.price = value
    }

    // なんかこの書き方は気に入らない…
    axios.get('/json/test.json').then((reslut) => {
      state.text = reslut.data.text
    })


    return {
      state,
      inputName,
      inputPrice
    }
  }
})
</script>
