import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, Spinner } from "@nixjs23n6/baseui-kit";
import IconCopy from "../stories/Icon/IconCopy";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataEntry/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: "Happy New Year",
};

export const OnChange: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <div>
      <div className="p-16">Value: {value}</div>
      <Input
        size="lg"
        placeholder="onChange"
        onChange={(e) => setValue(e?.target?.value)}
      />
    </div>
  );
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  placeholder: "Disabled",
  disabled: true,
};

export const Readonly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Readonly.args = {
  placeholder: "Readonly",
  readOnly: true,
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
  label: "Full name",
  placeholder: "Guillermo Rauch",
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  label: "Password",
  placeholder: "Password",
  type: "password",
  defaultValue: "12345",
};

export const Sizes: React.FC = () => (
  <div>
    <Input size="xs" placeholder="Mini" />
    <br />
    <br />
    <Input size="sm" placeholder="Small" />
    <br />
    <br />
    <Input size="md" placeholder="Medium" />
    <br />
    <br />
    <Input size="lg" placeholder="Large" />
    <br />
    <br />
    <Input size="xl" placeholder="xLarge" />
    <br />
    <br />
    <Input size="xxl" placeholder="xxLarge" />
    <br />
    <br />
    <Input width={"200px"} placeholder="width 200px" />
    <br />
    <br />
    <Input width={"300px"} size="lg" placeholder="width 300px and size lg" />
  </div>
);

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  label: "Full name",
  placeholder: "Guillermo Rauch",
  error: true,
};

export const HelperText: React.FC = () => (
  <div>
    <Input
      size="lg"
      placeholder="Enter your name"
      label="Name"
      helperText="Please enter your name"
    />
    <br />
    <br />
    <Input
      size="lg"
      placeholder="Enter something"
      label="Error"
      helperText="Required"
      error
    />
    <br />
    <br />
    <Input
      size="lg"
      placeholder="Password"
      label="Password"
      helperText="Insecure password"
      type={"password"}
      defaultValue={"12345"}
    />
    <br />
    <br />
    <Input
      size="lg"
      placeholder="Customize a helperText"
      label="Error"
      helperText={
        <p style={{ color: "orange" }}>This is a customize helper text</p>
      }
    />
  </div>
);

export const PrefixAndSuffix: React.FC = () => (
  <div>
    <Input
      defaultValue="Hello world"
      placeholder="Placeholder..."
      prefixHTML="￥"
      suffixHTML={<IconCopy />}
      width={"200px"}
    />
    <br />
    <br />
    <Input placeholder="localhost:3000" prefixHTML="https://" width={"200px"} />
    <br />
    <br />
    <Input placeholder="localhost:3000" suffixHTML=".org" width={"200px"} />
    <br />
    <br />
    <Input
      placeholder="localhost:3000"
      suffixHTML={<Spinner size="sm" color="dark" />}
      width={"200px"}
    />
  </div>
);
