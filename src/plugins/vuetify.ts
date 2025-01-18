/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import { md2 } from "vuetify/blueprints";

const customTheme: ThemeDefinition = {
  dark: false,
  // 参考：デジタル庁デザインシステムウェブサイト
  // https://design.digital.go.jp/foundations/color/
  // 参考：マテリアルカラーパレット — Vuetify
  // https://vuetifyjs.com/ja/styles/colors/
  colors: {
    background: "#FAFAFA", // grey-lighten-5
    surface: "#FFFFFF",
    primary: "#0066BE", // Light Blue-800
    secondary: "#008BF2", // Light Blue-600
    tertiary: "#00428C", // Light Blue-1000
    success: "#197A4B", // Green-800
    warning: "#927200", // Yellow-900
    error: "#CE0000", // Red-900
    info: "#1A1A1A", // Gray-900
    "on-background": "#1A1A1A", // Gray-900
    "on-surface": "#1A1A1A", // Gray-900
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "on-tertiary": "#FFFFFF",
    "on-success": "#FFFFFF",
    "on-warning": "#FFFFFF",
    "on-error": "#FFFFFF",
    "on-info": "#FFFFFF",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
  },
});
