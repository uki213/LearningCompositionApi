<template>
  <dl>
    <dt>金額</dt>
    <dd>
      <input
        :value="props.price"
        type="number"
        @input="inputPrice"
      >
    </dd>
    <dd>税込み価格:{{ tax }}</dd>
  </dl>
</template>

<script>
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    price: {
      type: Number
    }
  },
  setup(props, { emit }) {
    // 算出プロパティ
    const tax = computed(() => {
      const taxRate = 1.1
      // 消費税計算（10% 小数点切り捨て）
      return Math.floor(props.price * taxRate)
    })

    function inputPrice(event) {
      emit('input', event.target.value)
    }

    return {
      props,
      inputPrice,
      tax
    }
  }
})
</script>
