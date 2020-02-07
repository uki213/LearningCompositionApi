<template>
  <div>
    <h2 class="header header--size2">
      API返却値
    </h2>
    {{ props.apiResultText }}
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    apiResultText: {
      type: String // propsのdefaultは無くても良い？
    }
  },
  setup(props) {
    return {
      props
    }
  }
})
</script>
