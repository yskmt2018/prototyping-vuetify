<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "./components/Checkbox.vue";
import RadioButton from "./components/RadioButton.vue";
import Selectbox from "./components/Selectbox.vue";
import InputText from "./components/InputText.vue";
import Textarea from "./components/Textarea.vue";
import Button from "./components/Button.vue";

const tempChoices = [
  { label: "金融システム", value: "financialsystem" },
  { label: "流通システム", value: "distributionsystem" },
  { label: "製造システム", value: "manufacturingsystem" },
  { label: "海事サービス", value: "maritimeservices" },
  { label: "システム技術", value: "systemtechnology" },
  { label: "仙台支社", value: "sendai" },
];

const tempSelectedCheckbox = ref<string[]>([]);
const tempSelectedRadioButton = ref<string>("");
const tempSelectedSelectbox = ref<string>("");
const tempInputtedInputText = ref<string>("");
const tempInputtedTextarea = ref<string>("");
</script>

<template>
  <v-app id="prototype">
    <!-- 簡易的な横幅調整のため両サイドに配置 -->
    <v-navigation-drawer location="left" />
    <v-navigation-drawer location="right" />

    <v-app-bar>
      <v-img src="/src/assets/logo.svg" max-width="64" class="mx-4" />
      <v-app-bar-title>
        Vue & Vuetify によるフロントエンド・プロトタイピング
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <div>入力結果</div>
        <div>チェックボックス：{{ tempSelectedCheckbox }}</div>
        <div>ラジオボタン：{{ tempSelectedRadioButton }}</div>
        <div>セレクトボックス：{{ tempSelectedSelectbox }}</div>
        <div>インプットテキスト：{{ tempInputtedInputText }}</div>
        <div>テキストエリア：{{ tempInputtedTextarea }}</div>
      </v-container>
      <v-container>
        <v-row>
          <div class="ma-4">
            <Button text="プライマリ" importance="primary" />
          </div>
          <div class="ma-4">
            <Button text="セカンダリ" importance="secondary" />
          </div>
          <div class="ma-4">
            <Button text="ターシャリ" importance="tertiary" />
          </div>
        </v-row>
      </v-container>
      <v-container>
        <Checkbox
          v-model:selected="tempSelectedCheckbox"
          title="チェックボックス"
          hint="チェックボックスは、複数の項目の中から複数の選択肢を選ぶことを可能にします。"
          :choices="tempChoices"
          width="300"
        ></Checkbox>
      </v-container>
      <v-container>
        <RadioButton
          v-model:selected="tempSelectedRadioButton"
          title="ラジオボタン"
          hint="ラジオボタンは、ユーザーが選択肢の中から1つだけを選択できるようにする場合に使用します。"
          :choices="tempChoices"
          width="300"
        ></RadioButton>
      </v-container>
      <v-container>
        <Selectbox
          v-model:selected="tempSelectedSelectbox"
          title="セレクトボックス"
          hint="セレクトボックスは、複数の選択肢を提供するフォームコントロールです。"
          :choices="tempChoices"
          width="300"
        ></Selectbox>
      </v-container>
      <v-container>
        <InputText
          v-model:inputted="tempInputtedInputText"
          title="インプットテキスト"
          hint="テキスト入力コンポーネントは、名前や電話番号など、1行以内のテキストを入力する場合に使用します。"
          placeholder="（例）XXX-YYY-ZZZ"
          width="300"
        ></InputText>
      </v-container>
      <v-container>
        <Textarea
          v-model:inputted="tempInputtedTextarea"
          title="テキストエリア"
          hint="テキストエリアコンポーネントは、1行以上のテキストを入力する場合に使用します。"
          placeholder="（例）問い合わせ理由を入力してください"
          width="600"
        ></Textarea>
      </v-container>
    </v-main>

    <v-footer app border>
      <v-spacer />
      <v-icon icon="mdi-github" start />
      yskmt2018 (Yusuke Muto)
    </v-footer>
  </v-app>
</template>
