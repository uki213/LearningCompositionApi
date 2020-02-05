<template>
  <dl>
    <dt>名前入力</dt>
    <dd>
      <input
        type="text"
        :value="props.name"
        @input="inputName"
      >
    </dd>
  </dl>
</template>

<script>
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    name: {
      type: String
    }
  },
  setup(props, { emit }) {
    /*
      setupの第二引数内に入ってくる要素は以下の要素
      root, parent, refs, attrs, listeners, isServer, ssrContext, emit, slots
      この中でよく使うのは
      emit, slots, refs, attrsくらいかも？
    */
    function inputName(event) {
      emit('input', event.target.value)
    }

    return {
      props,
      inputName
    }
  }
})
</script>

<style lang="scss" scoped></style>
