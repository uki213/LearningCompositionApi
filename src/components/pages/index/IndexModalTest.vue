<template>
  <div>
    <h2 class="header header--size2">
      storeとdeferredを使用したモーダルテスト
    </h2>
    <button
      class="button button--small"
      @click="openModal()"
    >
      open modal
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import store from '@/store/index'

function openModal() {
  store.dispatch('modalOpen', {
    head: 'モーダルテスト',
    body: 'ボタンを選択後、選択結果をcosole.logで確認できます。'
  }).then((result) => {
    console.log(result)
  }).catch((result) => {
    console.log(result)
  })
}

export default defineComponent({
  setup() {
    return {
      openModal
    }
  }
})
</script>
