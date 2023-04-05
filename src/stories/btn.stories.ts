import type { Meta, StoryObj } from "@storybook/react";
import Btn from "./btn";
import styles from "./btn.module.scss";

const meta: Meta<typeof Btn> = {
  title: "Button",
  component: Btn,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Btn>;

export const Primary: Story = {
  args: {
    label: "The button of buttons",
    className: styles.buttonPrimary,
  },
};

export const Outline: Story = {
  args: {
    label: "I am outlined",
    className: styles.buttonOutline,
  },
};

export const Clear: Story = {
  args: {
    label: "Clear as day",
    className: styles.buttonClear,
  },
};

export const Link: Story = {
  args: {
    label: "Link to Rick Astley",
    className: styles.buttonLink,
  },
};
