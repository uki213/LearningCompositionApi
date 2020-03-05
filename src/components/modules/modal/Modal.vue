<template>
  <section
    v-if="modal.isOpen"
    class="modal"
  >
    <div class="modal__background">
      <div class="modal__outline">
        <div class="modal__head">
          {{ modal.head }}
        </div>
        <div class="modal__body">
          {{ modal.body }}
        </div>
        <div class="modal__button-area">
          <button
            class="button button--large button--blue modal__button"
            @click="method.negativeAction()"
          >
            CANCEL
          </button>
          <button
            class="button button--large button--blue modal__button"
            @click="method.positiveAction()"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'
import store from '@/store/index'

const method = {
  positiveAction() {
    store.dispatch('modalResolve', 'OKボタンを選択')
  },
  negativeAction() {
    store.dispatch('modalReject', 'CANCELボタンを選択')
  }
}

export default defineComponent({
  setup() {
    const modal = computed(() => store.state.modal)
    return {
      modal,
      method
    }
  }
})
</script>
