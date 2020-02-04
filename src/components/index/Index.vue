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
  </div>
</template>

<script>
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  components: { // コンポーネントの書き方は同じ
    // 今後モジュールのimportが増えそうなので、コンポーネントは下記のような感じで書くほうが良いかも
    IndexNameInput: () => import('@/components/index/IndexNameInput.vue'),
    IndexPriceInput: () => import('@/components/index/IndexPriceInput.vue')
  },
  setup() {
    const state = reactive({
      name: 'てすと',
      price: 1000
    })

    function inputName(value) {
      state.name = value
    }

    function inputPrice(value) {
      state.price = value
    }

    return {
      state,
      inputName,
      inputPrice
    }
  }
})
</script>
