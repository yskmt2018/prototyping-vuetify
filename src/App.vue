<script setup lang="ts"></script>

<template>
  <v-app id="prototype">
    <v-app-bar>
      <v-app-bar-title>
        Vue & Vuetify によるフロントエンド・プロトタイピング
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="css" scoped></style>
