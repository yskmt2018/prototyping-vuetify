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
const selected = defineModel<string[]>("selected", { required: true });
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
    <v-checkbox
      v-model:model-value="selected"
      @update:model-value="$emit('update')"
      :disabled="disabled"
      v-for="choice in $props.choices"
      :key="choice.value"
      :label="choice.label"
      :value="choice.value"
      :width="$props.width"
      density="compact"
      hide-details="auto"
      color="primary"
      base-color="tertiary"
    ></v-checkbox>
  </div>
</template>

<!-- NOTE
チェックボックス
チェックボックスは、複数の項目の中から複数の選択肢を選ぶことを可能にします。
また、ひとつの選択肢のオン・オフの切り替えにも用いることができます。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/checkbox/

参考：チェックボックス・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/checkboxes/
-->
