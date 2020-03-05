<template>
  <div class="display-api">
    <h2 class="header header--size2 display-api__header">
      API返却値
    </h2>
    {{ props.apiResultText }}
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
