import React from "react";

import Chip from "./index";
import { FaClock } from "react-icons/fa";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Chip",
  component: Chip,
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
    <Chip {...args} fontSize="xs" color="#34A47A">
      Small Chip
    </Chip>
    <Chip {...args} fontSize="sm" color="#FC892E">
      <FaClock />
      Chip with Icon
    </Chip>
    <Chip {...args} fontSize="lg" color="#FC892E">
      <FaClock />
      Large Chip with Icon
    </Chip>
    <Chip {...args} fontSize="md" color="#34A47A">
      2
    </Chip>
  </div>
);

export const Chips = Template.bind({});

Chips.args = {
  /*👇 The args you need here will depend on your component */
};
