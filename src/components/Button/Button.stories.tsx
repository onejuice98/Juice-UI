import React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    outlined: { control: "boolean" },
    contained: { control: "boolean" },
    plus: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { label, outlined, contained, plus } = args;
  return (
    <Button
      label={label}
      outlined={outlined}
      contained={contained}
      plus={plus}
    ></Button>
  );
};

export const label = Template.bind({});
label.args = {
  label: "BUTTON",
};
