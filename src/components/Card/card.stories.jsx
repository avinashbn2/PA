import React from "react";
import Card from "./index";
import { FaComment, FaEllipsisV } from "react-icons/fa";
import Chip from "../Chip";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
export const Template = (args) => (
  <Card {...args}>
    <Card.Header justify="flex-end">
      <FaEllipsisV />
    </Card.Header>
    <Card.Content>
      <Card.Title>Design</Card.Title>
      We need to design all our components and create storybook, before we
      starting working on state managment, handling data, testing etc
    </Card.Content>

    <Card.Footer justify="space-between">
      <Chip size="sm" color="salmon">
        26 March
      </Chip>
      <FaComment />
    </Card.Footer>
  </Card>
);

export const Cards = Template.bind({});

Cards.args = {
  /*👇 The args you need here will depend on your component */
};
