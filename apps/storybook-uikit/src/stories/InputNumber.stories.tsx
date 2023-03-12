import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputNumber, Spinner } from "@nixjs23n6/baseui-kit";
import IconCopy from "../stories/Icon/IconCopy";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DataEntry/InputNumber",
  component: InputNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: "Enter the number",
  defaultValue: 10000.1,
};

export const OnChange: React.FC = () => {
  const [value, setValue] = React.useState<string>("");
  return (
    <div>
      <div className="p-16">Value: {value}</div>
      <InputNumber
        size="lg"
        placeholder="onChange"
        onChange={(e) => setValue(JSON.stringify(e))}
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

export const OnlyNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyNumber.args = {
  placeholder: "Enter the number",
  onlyNumber: true,
  defaultValue: 10000.1,
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
  label: "Age",
  placeholder: "Enter your age",
};

export const Sizes: React.FC = () => (
  <div>
    <InputNumber size="xs" placeholder="Mini" />
    <br />
    <br />
    <InputNumber size="sm" placeholder="Small" />
    <br />
    <br />
    <InputNumber size="md" placeholder="Medium" />
    <br />
    <br />
    <InputNumber size="lg" placeholder="Large" />
    <br />
    <br />
    <InputNumber size="xl" placeholder="xLarge" />
    <br />
    <br />
    <InputNumber size="xxl" placeholder="xxLarge" />
    <br />
    <br />
    <InputNumber width={"200px"} placeholder="width 200px" />
    <br />
    <br />
    <InputNumber
      width={"300px"}
      size="lg"
      placeholder="width 300px and size lg"
    />
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
    <InputNumber
      size="lg"
      placeholder="Enter your age"
      label="age"
      helperText="Please enter your age"
    />
    <br />
    <br />
    <InputNumber
      size="lg"
      placeholder="Enter something"
      label="Error"
      helperText="Required"
      error
    />
    <br />
    <br />
    <InputNumber
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
    <InputNumber
      defaultValue="12000"
      placeholder="Placeholder..."
      prefixHTML="￥"
      suffixHTML={<IconCopy />}
      width={"200px"}
    />
    <br />
    <br />
    <InputNumber
      placeholder="Enter your code"
      prefixHTML="OTP:"
      width={"200px"}
    />
    <br />
    <br />
    <InputNumber
      placeholder="Enter your id"
      suffixHTML=".org"
      width={"200px"}
    />
    <br />
    <br />
    <InputNumber
      placeholder="Enter your code"
      suffixHTML={<Spinner size="sm" color="dark" />}
      width={"200px"}
    />
  </div>
);
