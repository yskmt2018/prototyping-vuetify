<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  /** テキスト */
  text: string;
  /** ボタンの重要度 */
  importance: "primary" | "secondary" | "tertiary";
}>();

// クリックアクションを通知
defineEmits(["click"]);

/** 非活性フラグ */
const disabled = ref<boolean>(false);
// 非活性フラグ操作関数を公開
defineExpose({
  setDisabled: () => (disabled.value = true),
  setEnabled: () => (disabled.value = false),
});

// ボタンの重要度によりスタイルを変更
const variant =
  props.importance === "primary"
    ? "elevated"
    : props.importance === "secondary"
    ? "outlined"
    : "tonal";
</script>

<template>
  <div>
    <v-btn
      @click="$emit('click')"
      :disabled="disabled"
      :text="$props.text"
      min-height="44"
      min-width="44"
      :variant="variant"
      :color="$props.importance"
      :base-color="$props.importance"
    ></v-btn>
  </div>
</template>

<!-- NOTE
ボタン
ボタンは、主にアクション実行またはページ遷移のためのトリガーとして使用します。
画面内におけるボタンの重要度に応じて使い分け可能な複数のスタイルがあります。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/button/

参考：ボタン・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/buttons/
-->
