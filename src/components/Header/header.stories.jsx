import React from "react";

import Header from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Header",
  component: Header,
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
    <Header {...args} fontSize="xs" color="#34A47A">
      Small Header
    </Header>
  </div>
);

export const Headers = Template.bind({});

Headers.args = {
  /*👇 The args you need here will depend on your component */
};
