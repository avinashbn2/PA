import "./App.css";
import GlobalStyle from "./globalStyles";
import { Route, Redirect, Router, Switch } from "react-router-dom";
import Secure from "containers/Secure";
import { ThemeProvider } from "styled-components";
import { useTheme } from "hooks";
import * as THEME from "theme";
import Auth from "containers/Auth";
import "nprogress/nprogress.css";

import history from "store/utils";
const NOTFOUND = () => <div>Not found</div>;
function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={THEME[theme]}>
      <GlobalStyle />

      <Router history={history}>
        <Switch>
          <Secure path="/secure" component={Secure} />
          <Redirect exact path="/" to="/secure" />
          <Auth />
          <Route component={NOTFOUND} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
