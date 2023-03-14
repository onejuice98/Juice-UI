import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Toggle from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const { contained } = args;
  return <Toggle contained={contained}></Toggle>;
};

export const element = Template.bind({});
