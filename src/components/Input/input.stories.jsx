import React from "react";

import { FaPlus } from "react-icons/fa";

import Input from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Input",
  component: Input,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    <Input
      value="test"
      {...args}
      label="Input"
      placeholder="Placeholder"
    ></Input>
    <Input
      {...args}
      label="Erred Input"
      error="Somethings wrong"
      placeholder="Placeholder"
    ></Input>
    <Input
      {...args}
      label="Disabled Input"
      disabled
      placeholder="Placeholder"
    ></Input>

    <TemplateWithIcon {...args}></TemplateWithIcon>
  </div>
);

export const Inputs = Template.bind({});

Inputs.args = {
  /*👇 The args you need here will depend on your component */
};
const TemplateWithIcon = (args) => (
  <Input {...args}>
    <FaPlus /> Input With Icon
  </Input>
);
