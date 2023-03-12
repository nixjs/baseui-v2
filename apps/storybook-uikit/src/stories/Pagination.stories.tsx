import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "@nixjs23n6/baseui-kit";

export default {
  title: "General/Pagination",
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = { initialPage: 1, total: 20 };

export const Loop = Template.bind({});
Loop.args = { initialPage: 1, total: 10, loop: true };

export const NoControls = Template.bind({});
NoControls.args = { initialPage: 1, total: 10, withControls: false };

export const NoEdges = Template.bind({});
NoEdges.args = { initialPage: 1, total: 10, withEdges: false };

export const Siblings: React.FC = () => {
  return (
    <>
      <h4 className="text-primary">1 Sibling (default)</h4>
      <Pagination initialPage={6} total={14} siblings={1} />
      <br />
      <h4 className="text-primary">2 Siblings</h4>
      <Pagination initialPage={6} total={14} siblings={2} />
      <br />
      <h4 className="text-primary">3 Siblings</h4>
      <Pagination initialPage={6} total={14} siblings={3} />
    </>
  );
};

export const Boundaries: React.FC = () => {
  return (
    <>
      <h4 className="text-primary">1 Boundary (default)</h4>
      <Pagination initialPage={6} total={14} boundaries={1} />
      <br />
      <h4 className="text-primary">2 Boundaries</h4>
      <Pagination initialPage={6} total={14} boundaries={2} />
      <br />
      <h4 className="text-primary">3 Boundaries</h4>
      <Pagination initialPage={6} total={14} boundaries={3} />
    </>
  );
};
