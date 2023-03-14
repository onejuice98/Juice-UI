import React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { label } = args;
  return <Button label={label}></Button>;
};

export const label = Template.bind({});
label.args = {
  label: "Button",
};
