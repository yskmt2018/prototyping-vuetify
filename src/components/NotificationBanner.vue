<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  /** タイトル */
  title: string;
  /** テキスト（任意） */
  text?: string;
  /** 通知タイプ */
  type: "success" | "info" | "warning" | "error";
}>();

// 表示の更新を通知
defineEmits(["update"]);

/** 表示フラグ */
const isDisplay = ref<boolean>(true);
// 表示フラグ操作関数を公開
defineExpose({
  setVisible: () => (isDisplay.value = true),
  setHidden: () => (isDisplay.value = false),
});
</script>

<template>
  <div>
    <v-alert
      v-model:model-value="isDisplay"
      @update:model-value="$emit('update')"
      :title="$props.title"
      :text="$props.text"
      :type="$props.type"
      :closable="$props.type !== 'error'"
      variant="outlined"
      border
    ></v-alert>
  </div>
</template>

<!-- NOTE
ノティフィケーションバナー
サイト/サービス全体に関わる、またはページや要素単位における重要度の高い情報を、ユーザーの操作に関わらず、サイト/サービス側からユーザーへ提示する場合に用いる通知バナーです。
通知に対するユーザーアクションを要求することが可能です。メンテナンスを通知したい、ユーザーの対応が必要な情報を通知してアクションさせたい、といった要求に対応することができます。

出典：デジタル庁デザインシステムウェブサイト
https://design.digital.go.jp/components/notification-banner/

参考：Alert コンポーネント — Vuetify
https://vuetifyjs.com/ja/components/alerts/
-->
