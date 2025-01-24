<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  /** タイトル */
  title: string;
  /** ヒント（任意） */
  hint?: string;
  /** 入力欄のプレースホルダ（任意） */
  placeholder?: string;
  /** コンポーネントの横幅 */
  width: string | number;
}>();

/** 入力された文字列 */
const inputted = defineModel<string>("inputted", { required: true });
// 入力の更新を通知
defineEmits(["update"]);

/** 非活性フラグ */
const disabled = ref<boolean>(false);
// 非活性フラグ操作関数を公開
defineExpose({
  setDisabled: () => (disabled.value = true),
  setEnabled: () => (disabled.value = false),
});
</script>

<template>
  <div>
    <div class="text-h6">{{ $props.title }}</div>
    <div class="text-caption" v-if="$props.hint">{{ $props.hint }}</div>
    <v-textarea
      v-model:model-value="inputted"
      @update:model-value="$emit('update')"
      :disabled="disabled"
      :placeholder="$props.placeholder"
      :width="$props.width"
      density="compact"
      counter
      persistent-counter
      color="primary"
      base-color="tertiary"
    ></v-textarea>
  </div>
</template>

<!-- NOTE
テキストエリア
テキストエリアコンポーネントは、1行以上のテキストを入力する場合に使用します。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/textarea/

参考：テキストエリア・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/textareas/
-->
