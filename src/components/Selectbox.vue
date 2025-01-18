<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  /** タイトル */
  title: string;
  /** ヒント（任意） */
  hint?: string;
  /** 選択肢のリスト（ラベル、識別子） */
  choices: { label: string; value: string }[];
  /** コンポーネントの横幅 */
  width: string | number;
}>();

/** 選択された識別子 */
const selected = defineModel<string>("selected", { required: true });
// 選択の更新を通知
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
    <v-select
      v-model:model-value="selected"
      @update:model-value="$emit('update')"
      :disabled="disabled"
      :items="$props.choices"
      item-title="label"
      item-value="value"
      :width="$props.width"
      density="compact"
      hide-details="auto"
      color="primary"
      base-color="tertiary"
    ></v-select>
  </div>
</template>

<!-- NOTE
セレクトボックス
セレクトボックスは、複数の選択肢を提供するフォームコントロールです。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/select/

参考：セレクト・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/selects/
-->
