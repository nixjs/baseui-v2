import React from "react";
import { Tooltip, Button } from "@nixjs23n6/baseui-kit";

export default {
  title: "Feedback/Tooltip",
  component: Tooltip,
};

export const Default: React.FC = () => {
  return (
    <div className="pt-24">
      <Tooltip content="Developers love Next.js" showArrow placement="auto">
        <Button autoWidth className="pl-10 pr-10">
          Do hover here
        </Button>
      </Tooltip>
    </div>
  );
};

export const Colors: React.FC = () => {
  return (
    <div className="d-flex gap-12">
      <Tooltip content="Developers love Next.js" showArrow color="primary">
        <Button autoWidth className="pl-10 pr-10" color="primary">
          Primary
        </Button>
      </Tooltip>
      <Tooltip content="Developers love Next.js" showArrow color="secondary">
        <Button autoWidth className="pl-10 pr-10" color="secondary">
          Secondary
        </Button>
      </Tooltip>
      <Tooltip content="Developers love Next.js" showArrow color="info">
        <Button autoWidth className="pl-10 pr-10" color="info">
          Info
        </Button>
      </Tooltip>
      <Tooltip content="Developers love Next.js" showArrow color="success">
        <Button autoWidth className="pl-10 pr-10" color="success">
          Success
        </Button>
      </Tooltip>
      <Tooltip content="Developers love Next.js" showArrow color="light">
        <Button autoWidth className="pl-10 pr-10" color="light">
          Light
        </Button>
      </Tooltip>
      <Tooltip content="Developers love Next.js" showArrow color="dark">
        <Button autoWidth className="pl-10 pr-10" color="dark">
          Dark
        </Button>
      </Tooltip>
    </div>
  );
};

export const Trigger: React.FC = () => {
  return (
    <div className="d-flex gap-12">
      <Tooltip
        content="Developers love Next.js"
        showArrow
        color="primary"
        trigger={"click"}
      >
        <Button autoWidth className="pl-10 pr-10" color="primary">
          Click me
        </Button>
      </Tooltip>
      <Tooltip
        content="Developers love Next.js"
        showArrow
        color="secondary"
        trigger={"hover"}
      >
        <Button autoWidth className="pl-10 pr-10" color="secondary">
          Hover me
        </Button>
      </Tooltip>
    </div>
  );
};

export const NoArrow: React.FC = () => {
  return (
    <div className="d-flex gap-12">
      <Tooltip
        content="Developers love Next.js"
        showArrow={false}
        color="secondary"
        trigger={"hover"}
      >
        <Button autoWidth className="pl-10 pr-10" color="secondary">
          Hover me
        </Button>
      </Tooltip>
    </div>
  );
};
