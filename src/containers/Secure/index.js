import React, { memo, useEffect } from "react";
import { Route } from "react-router-dom";
import { routes } from "utils/routeConfig";
import TaskBoard from "containers/TaskBoard";
import Projects from "containers/Projects";
import Layout from "components/Layout";
import { Switch } from "react-router-dom";

const ComponentMap = {
  AllProjects: Projects,
  Project: TaskBoard,
};

function Secure(props) {
  console.log("props", props);
  useEffect(() => {
    console.log("sdrerfe");
  }, []);
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            exact
            path={`${route.path}`}
            component={ComponentMap[route.name]}
          />
        ))}
        <Route key="project" path="/project/:id" component={TaskBoard} />
      </Switch>
    </Layout>
  );
}

export default memo(Secure);
