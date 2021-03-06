import React from "react";

import Select from "./index";
//๐ This default export determines where your story goes in the story list
export default {
  title: "Select",
  component: Select,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => (
  <div>
    <Select
      onChange={console.log}
      options={["MyDashboard", "Codechunks", "Trelly"]}
    ></Select>
  </div>
);

export const Selects = Template.bind({});

Selects.args = {
  /*๐ The args you need here will depend on your component */
};
