import { ThemeProvider } from "styled-components";
import THEME from "../src/theme/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {},
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={THEME}>
      <Story />
    </ThemeProvider>
  ),
];
