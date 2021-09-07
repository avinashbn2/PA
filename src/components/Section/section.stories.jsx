import React from "react";

import Section from "./index";
import { Template as Card } from "../Card/card.stories";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Section",
  component: Section,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 16,
    }}
  >
    <Section title="Todo" {...args}>
      <Card />
      <Card />
    </Section>
    <Section title="In Progress" {...args}>
      <Card />
    </Section>
    <Section {...args}></Section>
  </div>
);

export const Sections = Template.bind({});

Sections.args = {
  /*👇 The args you need here will depend on your component */
};
