import React from "react";

import Search from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Search",
  component: Search,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 16,
    }}
  >
    <Search placeholder="Search..." />
  </div>
);

export const SearchComponent = Template.bind({});

SearchComponent.args = {
  /*👇 The args you need here will depend on your component */
};
