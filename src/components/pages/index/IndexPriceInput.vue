<template>
  <dl class="price-input">
    <dt class="header header--size2 price-input__header">
      金額
    </dt>
    <dd class="price-input__content">
      <input
        class="input input__number"
        :value="price"
        type="number"
        @input="$emit('input', Number($event.target.value))"
      >
      {{ /* emit処理はテンプレートに寄せる。受け渡す値に加工が必要な場合は業務ロジックに渡して戻り値を得る */ }}
    </dd>
    <dd class="price-input__content">
      税込み価格:{{ tax }}
    </dd>
  </dl>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    price: {
      type: Number
    }
  },
  setup(props) {
    // 算出プロパティ
    // 業務ロジックはsetup関数の外に記述
    const tax = computed(() => {
      const taxRate = 1.1 // 消費税計算（10% 小数点切り捨て）
      return Math.floor(props.price * taxRate)
    })

    return {
      tax
    }
  }
})
</script>
