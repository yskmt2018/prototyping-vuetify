<script setup lang="ts">
import Button from "@/components/Button.vue";

defineProps<{
  /** タイトル */
  title: string;
  /** 使用するスロット名のリスト */
  slotNames: string[];
  /** 左側のボタン */
  leftButton: {
    /** テキスト */
    text: string;
    /** クリックアクション */
    clickAction: () => void;
  };
  /** 右側のボタン */
  rightButton: {
    /** テキスト */
    text: string;
    /** クリックアクション */
    clickAction: () => void;
  };
}>();
</script>

<template>
  <div>
    <v-card class="pa-12" width="800">
      <div class="text-h4">{{ $props.title }}</div>
      <v-divider class="my-4" />
      <slot v-for="name in $props.slotNames" :key="name" :name="name" />
      <v-row class="mt-4">
        <Button
          @click="$props.leftButton.clickAction"
          :text="$props.leftButton.text"
          importance="secondary"
        ></Button>
        <v-spacer />
        <Button
          @click="$props.rightButton.clickAction"
          :text="$props.rightButton.text"
          importance="primary"
        ></Button>
      </v-row>
    </v-card>
  </div>
</template>
