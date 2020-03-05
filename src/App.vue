<template>
  <div
    id="app"
    class="page"
  >
    <router-view />
    <Modal />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    Modal: () => import('./components/modules/modal/Modal.vue')
  }
})
</script>

<style lang="scss">
@import '../src/scss/main.scss';
</style>
