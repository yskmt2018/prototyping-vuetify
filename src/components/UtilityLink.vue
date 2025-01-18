<script setup lang="ts">
const props = defineProps<{
  /** テキスト */
  text: string;
  /** リンク先 */
  link: string;
}>();

/** リンク先を新しいタブで表示する */
const goToLink = () => {
  window.open(props.link, "_blank");
};
</script>

<template>
  <div>
    <v-btn
      @click="goToLink"
      :text="$props.text"
      variant="text"
      density="compact"
      append-icon="mdi-open-in-new"
      class="underline"
    ></v-btn>
  </div>
</template>

<style lang="css" scoped>
.underline:hover {
  text-decoration: underline;
}
</style>

<!-- NOTE
ユーティリティリンク
ユーティリティリンクはふつうの横並びリンクリストに近いが、それよりもコンパクトに作られています。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/utility-link/

参考：ボタン・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/buttons/
-->
