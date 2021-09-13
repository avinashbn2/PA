import "./App.css";
import GlobalStyle from "./globalStyles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "utils/routeConfig";
import Project from "containers/Project";
import Layout from "components/Layout";

const ComponentMap = {
  Project: Project,
};
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                component={ComponentMap[route.name]}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
