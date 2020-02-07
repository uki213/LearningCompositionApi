<template>
  <dl>
    <dt class="header header--size2">
      金額
    </dt>
    <dd>
      <input
        :value="props.price"
        type="number"
        @input="$emit('input', $event.target.value)"
      >
      {{ /* emit処理はテンプレートに寄せる。受け渡す値に加工が必要な場合は業務ロジックに渡して戻り値を得る */ }}
    </dd>
    <dd>税込み価格:{{ tax }}</dd>
  </dl>
</template>

<script>
import { createComponent, computed } from '@vue/composition-api'

/*
  数が多い場合はメソッドにまとめても良い
*/
function taxCalculator(price) {
  const taxRate = 1.1
  // 消費税計算（10% 小数点切り捨て）
  return Math.floor(price * taxRate)
}

export default createComponent({
  props: {
    price: {
      type: Number
    }
  },
  setup(props) {
    // 算出プロパティ
    // 業務ロジックはsetup関数の外に記述
    const tax = computed(() => taxCalculator(props.price))

    return {
      props,
      tax
    }
  }
})
</script>
