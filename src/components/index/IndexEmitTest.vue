<template>
  <div>
    <button @click="emitTest">
      Emit Test
    </button>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'

let $emit

function emitTest() {
  $emit('input')
}

export default createComponent({
  setup(props, { emit }) {
    $emit = emit
    return {
      emitTest
    }
  }
})
</script>
