<template>
  <dl>
    <dt class="header header--size2">
      名前入力
    </dt>
    <dd>
      <input
        type="text"
        :value="props.name"
        @input="$emit('input', extractionValue($event))"
      >
    </dd>
  </dl>
</template>

<script>
import { createComponent } from '@vue/composition-api'

// emitする際に業務ロジックが必要な場合は、関数化する。
function extractionValue(event) {
  return event.target.value
}

export default createComponent({
  props: {
    name: {
      type: String
    }
  },
  setup(props) {
    /*
      setupの第二引数のオブジェクトに入ってくる要素は以下の要素(context)
      root, parent, refs, attrs, listeners, isServer, ssrContext, emit, slots
      強引な手法に転用できるので、使わずにいられるのであれば使いたくない。
      どうしても使用する場合も[ emit、refs、attrs ]程度に留めたい
    */
    return {
      props,
      extractionValue
    }
  }
})
</script>
