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
  colors: {
    background: "#FFFFFF", // White
    surface: "#F0F9FF", // Light Blue-50
    primary: "#0066BE", // Light Blue-800
    secondary: "#008BF2", // Light Blue-600
    tertiary: "#00428C", // Light Blue-1000
    success: "#197A4B", // Green-800
    warning: "#927200", // Yellow-900
    error: "#CE0000", // Red-900
    info: "#264AF4", // Blue-700
    "on-background": "#1A1A1A", // Gray-900
    "on-surface": "#1A1A1A", // Gray-900
    "on-primary": "#FFFFFF", // White
    "on-secondary": "#FFFFFF", // White
    "on-tertiary": "#FFFFFF", // White
    "on-success": "#FFFFFF", // White
    "on-warning": "#FFFFFF", // White
    "on-error": "#FFFFFF", // White
    "on-info": "#FFFFFF", // White
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
