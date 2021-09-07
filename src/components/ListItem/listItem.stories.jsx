import React from "react";

import ListItem from "./index";
import Chip from "../Chip";
import { FaCog } from "react-icons/fa";

//👇 This default export determines where your story goes in the story list
export default {
  title: "ListItem",
  component: ListItem,
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
    <ListItem {...args}>
      <FaCog /> ListItem
    </ListItem>
    <ListItem {...args} active>
      <FaCog />
      Active ListItem
    </ListItem>
    <ListItem {...args} active>
      <FaCog />
      Active ListItem
      <Chip {...args} fontSize="md" color="#34A47A">
        2
      </Chip>
    </ListItem>
  </div>
);

export const ListItems = Template.bind({});

ListItems.args = {
  /*👇 The args you need here will depend on your component */
};
