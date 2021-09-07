import React from "react";

import { FaCog, FaHome, FaClock } from "react-icons/fa";
import Sidebar from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Sidebar",
  component: Sidebar,
};

const routes = [
  { name: "Projects", path: "/projects", icon: <FaHome /> },
  { name: "Timers", path: "/timers", icon: <FaClock /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];
//👇 We create a “template” of how args map to rendering
const Template = (args) => <Sidebar routes={routes} activeRoute="Settings" />;

export const SidebarComponent = Template.bind({});

SidebarComponent.args = {
  /*👇 The args you need here will depend on your component */
};
