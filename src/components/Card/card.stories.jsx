import React from "react";
import Card from "./index";
import { FaComment, FaEllipsisV } from "react-icons/fa";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Card {...args}>
    <Card.Header justify="flex-end">
      <FaEllipsisV />
    </Card.Header>
    <Card.Content>
      Create UI Components before deliving into Backend
    </Card.Content>

    <Card.Footer justify="space-between">
      <span>@26th March</span>
      <FaComment />
    </Card.Footer>
  </Card>
);

export const Cards = Template.bind({});

Cards.args = {
  /*👇 The args you need here will depend on your component */
};
