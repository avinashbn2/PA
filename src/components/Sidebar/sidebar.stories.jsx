import React from "react";

import { routes } from "../../utils/routeConfig";
import Sidebar from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Sidebar",
  component: Sidebar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Sidebar routes={routes} activeRoute="Settings" />;

export const SidebarComponent = Template.bind({});

SidebarComponent.args = {
  /*👇 The args you need here will depend on your component */
};
