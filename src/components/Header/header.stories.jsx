import React from "react";

import Header from "./index";

//๐ This default export determines where your story goes in the story list
export default {
  title: "Header",
  component: Header,
};

//๐ We create a โtemplateโ of how args map to rendering
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
  /*๐ The args you need here will depend on your component */
};
