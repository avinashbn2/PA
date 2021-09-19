import { ThemeProvider } from "styled-components";
import * as theme from "theme";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// .storybook/preview.js

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.light}>
      <Story />
    </ThemeProvider>
  ),
];
