import "./App.css";
import { useMemo, memo } from "react";
import GlobalStyle from "./globalStyles";
import { Route, Redirect, Router, Switch } from "react-router-dom";
import Secure from "containers/Secure";
import { ThemeProvider } from "styled-components";
import { useTheme } from "hooks";
import * as THEME from "theme";
import Auth from "containers/Auth";
import "nprogress/nprogress.css";
import { ModalProvider } from "styled-react-modal";

import history from "store/utils";
const NOTFOUND = () => <div>Not found</div>;
function App() {
  const { theme } = useTheme();
  const mHistory = useMemo(() => history, []);
  return (
    <ThemeProvider theme={THEME[theme]}>
      <GlobalStyle />
      <ModalProvider>
        <Router history={mHistory}>
          <Switch>
            <Route path="/secure" component={Secure} />
            <Redirect exact path="/" to="/secure" />
            <Auth />
            <Route component={NOTFOUND} />
          </Switch>
        </Router>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default memo(App);
