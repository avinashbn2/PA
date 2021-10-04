import * as theme from "theme";

import { ThemeProvider } from "styled-components";
/**
 *
 * @param {ReactNode} Component
 * @param {string} type
 * @returns Component
 * withTheme wraps the component with theme provider, mainly used for testing and storybook
 */

function withTheme(Component, type = "light") {
  return (props) => (
    <ThemeProvider theme={theme[type]}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export default withTheme;
