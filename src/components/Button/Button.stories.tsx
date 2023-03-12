import React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";

export default {
  title: "Test Button",
  component: Button,
  argTypes: {
    label: { control: "string" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { label } = args;
  return <Button label={label}></Button>;
};

export const Label = Template.bind({});
Label.args = {
  Label: "string",
};
