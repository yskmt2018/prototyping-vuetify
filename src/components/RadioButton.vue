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
    <v-radio-group
      v-model:model-value="selected"
      @update:model-value="$emit('update')"
      :disabled="disabled"
      :width="$props.width"
      hide-details="auto"
    >
      <v-radio
        v-for="choice in $props.choices"
        :key="choice.value"
        :label="choice.label"
        :value="choice.value"
        color="primary"
        base-color="tertiary"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<!-- NOTE
ラジオボタン
ラジオボタンは、ユーザーが選択肢の中から1つだけを選択できるようにする場合に使用します。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/radio/

参考：ラジオボタン・コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/radio-buttons/
-->
