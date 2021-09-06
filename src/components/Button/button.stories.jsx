import React from "react";

import { FaPlus } from "react-icons/fa";

import Button from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "YourComponent",
  component: Button,
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
    <Button {...args} color="primary">
      Button
    </Button>
    <Button {...args} fontSize="xs" color="primary">
      Button xs
    </Button>
    <Button {...args} fontSize="sm" color="primary">
      Button sm
    </Button>
    <Button {...args} fontSize="md" color="primary">
      Button md
    </Button>
    <Button {...args} fontSize="lg" color="primary">
      Button lg
    </Button>
    <Button {...args} fontSize="xl" color="primary">
      Button xl
    </Button>
    <Button {...args} color="secondary">
      Secondary Btn
    </Button>
    <TemplateWithIcon {...args}></TemplateWithIcon>
  </div>
);

export const Buttons = Template.bind({});

Buttons.args = {
  /*👇 The args you need here will depend on your component */
};
const TemplateWithIcon = (args) => (
  <Button {...args}>
    <FaPlus /> Button With Icon
  </Button>
);
