import "./App.css";
import GlobalStyle from "./globalStyles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "utils/routeConfig";
import Layout from "components/Layout";
import TaskBoard from "containers/TaskBoard";
import Projects from "containers/Projects";

import { ThemeProvider } from "styled-components";
import { useTheme } from "hooks";
import * as THEME from "theme";
const ComponentMap = {
  AllProjects: Projects,
  Project: TaskBoard,
};
function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={THEME[theme]}>
      <GlobalStyle />

      <Router>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                exact
                path={route.path}
                component={ComponentMap[route.name]}
              />
            ))}
            <Route key="project" path="/project/:id" component={TaskBoard} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
