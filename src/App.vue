<script setup lang="ts">
import { ref } from "vue";
import InputText from "@/components/InputText.vue";
import Textarea from "@/components/Textarea.vue";
import RadioButton from "@/components/RadioButton.vue";
import Checkbox from "@/components/Checkbox.vue";
import FormsTemplate from "@/templates/FormsTemplate.vue";
import UtilityLink from "@/components/UtilityLink.vue";

const inputtedName = ref<string>("");
const inputtedMessage = ref<string>("");
const business = [
  { label: "金融システム", value: "financialsystem" },
  { label: "流通システム", value: "distributionsystem" },
  { label: "製造システム", value: "manufacturingsystem" },
  { label: "海事サービス", value: "maritimeservices" },
  { label: "システム技術", value: "systemtechnology" },
  { label: "仙台支社", value: "sendai" },
];
const selectedBusiness = ref<string>("");
const privacy = [{ label: "同意する", value: "agreed" }];
const selectedPrivacy = ref<string[]>([]);
</script>

<template>
  <v-app id="prototype">
    <!-- 簡易的な横幅調整のため両サイドに配置 -->
    <v-navigation-drawer location="left" color="grey-lighten-3" />
    <v-navigation-drawer location="right" color="grey-lighten-3" />

    <v-app-bar>
      <v-img src="/src/assets/logo.svg" max-width="64" class="mx-4" />
      <v-app-bar-title>
        VueとVuetifyによるフロントエンド・プロトタイピング
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-spacer />
          <FormsTemplate
            title="お問い合わせフォーム例"
            :slot-names="['name', 'business', 'message', 'privacy']"
            :left-button="{
              text: '戻る',
              clickAction: () => {
                /* 何もしない */
              },
            }"
            :right-button="{
              text: '確認',
              clickAction: () => {
                /* 何もしない */
              },
            }"
          >
            <template #name>
              <InputText
                v-model:inputted="inputtedName"
                title="氏名"
                width="300"
                class="my-5"
              ></InputText>
            </template>
            <template #business>
              <RadioButton
                v-model:selected="selectedBusiness"
                title="お問い合わせ先"
                :choices="business"
                width="300"
                class="my-5"
              ></RadioButton>
            </template>
            <template #message>
              <Textarea
                v-model:inputted="inputtedMessage"
                title="お問い合わせ内容"
                width="600"
                class="my-5"
              ></Textarea>
            </template>
            <template #privacy>
              <Checkbox
                v-model:selected="selectedPrivacy"
                title="情報保護方針"
                :choices="privacy"
                width="300"
                class="my-5"
              ></Checkbox>
            </template>
          </FormsTemplate>
          <v-spacer />
        </v-row>
      </v-container>
    </v-main>

    <v-footer app border>
      <UtilityLink
        text="Nippon Sogo Systems, Inc."
        link="https://www.nssys.co.jp"
      ></UtilityLink>
      <v-spacer />
      <v-icon icon="mdi-github" start />
      yskmt2018 (Yusuke Muto)
    </v-footer>
  </v-app>
</template>
