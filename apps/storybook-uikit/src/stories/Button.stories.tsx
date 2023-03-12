import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@nixjs23n6/baseui-kit";
import IconAvatar from "./Icon/IconAvatar";
import IconBinance from "./Icon/IconBinance";
import IconGoogle from "./Icon/IconGoogle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      defaultValue: "md",
    },
    color: {
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "primary",
  children: "Button",
};

export const Colors: React.FC = () => {
  return (
    <div className="container-box">
      <Button type="button" color="primary">
        Primary
      </Button>
      <br />
      <br />
      <Button type="button" color="secondary">
        Secondary
      </Button>
      <br />
      <br />
      <Button type="button" color="success">
        Success
      </Button>
      <br />
      <br />
      <Button type="button" color="info">
        Info
      </Button>
      <br />
      <br />
      <Button type="button" color="warning">
        Warning
      </Button>
      <br />
      <br />
      <Button type="button" color="danger">
        Danger
      </Button>
      <br />
      <br />
      <Button type="button" color="light">
        Light
      </Button>
      <br />
      <br />
      <Button type="button" color="dark">
        Dark
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-primary">
        Outline Primary
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-secondary">
        Outline Secondary
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-success">
        Outline Success
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-info">
        Outline Info
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-warning">
        Outline Warning
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-danger">
        Outline Danger
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-light">
        Outline Light
      </Button>
      <br />
      <br />
      <Button type="button" color="outline-dark">
        Outline Dark
      </Button>
      <br />
      <br />
    </div>
  );
};
export const Sizes: React.FC = () => (
  <div>
    <Button type="button" color="primary" size="xs">
      Mini
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="sm">
      Small
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="md">
      Medium
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="lg">
      Large
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="xl">
      XLarge
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="xxl">
      XXLarge
    </Button>
    <br />
    <br />
    <Button type="button" color="primary" size="md" autoWidth>
      Auto Width
    </Button>
  </div>
);

export const Icons: React.FC = () => (
  <div>
    <div className="d-flex align-items-center gap-12">
      <Button
        height="3rem"
        width="3rem"
        type="button"
        color="warning"
        size="md"
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        }
      />{" "}
      <br />
      <Button
        type="button"
        color="danger"
        size="md"
        icon={<IconGoogle height={24} width={24} />}
      />{" "}
      <br />
      <Button
        type="button"
        color="dark"
        size="md"
        icon={<IconAvatar height={24} width={24} />}
      />{" "}
      <br />
      <Button
        type="button"
        color="light"
        size="md"
        icon={<IconBinance height={24} width={24} />}
      />
    </div>
    <br />
    <br />
    <Button
      type="button"
      color="primary"
      size="md"
      startIcon={<IconAvatar height={24} width={24} />}
      minWidth="12rem"
    >
      Primary
    </Button>
    <br />
    <br />
    <Button
      type="button"
      color="warning"
      size="md"
      endIcon={<IconGoogle height={24} width={24} />}
      minWidth="12rem"
    >
      Google
    </Button>
    <br />
    <br />
    <Button
      type="button"
      color="primary"
      size="md"
      endIcon={<IconBinance height={24} width={24} />}
      minWidth="24rem"
    >
      Binance Chain Wallet
    </Button>
    <br />
    <br />
    <Button
      type="button"
      color="dark"
      size="md"
      startIcon={<IconGoogle height={24} width={24} />}
      minWidth="12rem"
    >
      Google
    </Button>
    <br />
    <br />
    <Button
      type="button"
      color="dark"
      size="md"
      startIcon={<IconBinance height={24} width={24} />}
      minWidth="24rem"
    >
      Binance Chain Wallet
    </Button>
  </div>
);

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  color: "primary",
  children: "Disabled",
  disabled: true,
};
