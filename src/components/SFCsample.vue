<script setup lang="ts">
// <script> ブロックにロジックを記述する。言語は JavaScript（TypeScript）
const companyName = "Nippon Sogo Systems, Inc.";
</script>

<template>
  <!-- <template> ブロックにビューを記述する。言語は HTML -->
  <div class="underline">{{ companyName }}</div>
</template>

<style lang="css" scoped>
/* <style> ブロックにスタイルを記述する。言語は CSS */
.underline:hover {
  text-decoration: underline;
}
</style>
