<template>
  <div>
    <h2 class="header header--size2">
      setup関数の外にあるmethodでのemit処理
    </h2>
    <button
      class="button button--small"
      @click="emitTest"
    >
      Emit Test
    </button>
    コンソールログを確認
  </div>
</template>

<script>
/*

  この方法は、あまり良くないので基本使わない。

*/
import { defineComponent } from '@vue/composition-api'

let $ // setup関数の外でcontextを参照したいので、スコープ外にアクセス領域のための場所を確保する

function emitTest() {
  $.emit('input') // $.emitで呼び出し可能。このケースの場合contextをすべて取得しているので、$.attrや$.refsなども使える
}

export default defineComponent({
  setup(props, context) {
    $ = context // contextをsetup関数のスコープ外へ出す
    return {
      emitTest
    }
  }
})
</script>
