import React from "react";
import { Spinner } from "@nixjs23n6/baseui-kit";

export default {
  title: "Feedback/Spinner",
  component: Spinner,
};

export const Default: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-12 pt-24">
      <Spinner color="primary" size="xxl" content="default" />
      <br />
      <Spinner color="primary" size="xl" content="default" />
      <br />
      <Spinner color="primary" size="lg" content="default" />
      <br />
      <Spinner color="primary" size="md" content="default" />
      <br />
      <Spinner color="primary" size="sm" content="default" />
      <br />
      <Spinner color="primary" size="xs" content="default" />
    </div>
  );
};

export const Donut: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-12 pt-24">
      <Spinner color="primary" size="xxl" content="donut" />
      <Spinner color="primary" size="xl" content="donut" />
      <Spinner color="primary" size="lg" content="donut" />
      <Spinner color="primary" size="md" content="donut" />
      <Spinner color="primary" size="sm" content="donut" />
      <Spinner color="primary" size="xs" content="donut" />
    </div>
  );
};
export const DonutEx: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-12 pt-24">
      <Spinner color="primary" size="xxl" content="donut-ex" />
      <Spinner color="primary" size="xl" content="donut-ex" />
      <Spinner color="primary" size="lg" content="donut-ex" />
      <Spinner color="primary" size="md" content="donut-ex" />
      <Spinner color="primary" size="sm" content="donut-ex" />
      <Spinner color="primary" size="xs" content="donut-ex" />
    </div>
  );
};
export const Ripple: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-12 pt-24">
      <Spinner color="primary" size="xxl" content="ripple" />
      <Spinner color="primary" size="xl" content="ripple" />
      <Spinner color="primary" size="lg" content="ripple" />
      <Spinner color="primary" size="md" content="ripple" />
      <Spinner color="primary" size="sm" content="ripple" />
      <Spinner color="primary" size="xs" content="ripple" />
    </div>
  );
};
export const RippleEx: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-12 pt-24">
      <Spinner color="primary" size="xxl" content="ripple-ex" />
      <Spinner color="primary" size="xl" content="ripple-ex" />
      <Spinner color="primary" size="lg" content="ripple-ex" />
      <Spinner color="primary" size="md" content="ripple-ex" />
      <Spinner color="primary" size="sm" content="ripple-ex" />
      <Spinner color="primary" size="xs" content="ripple-ex" />
    </div>
  );
};
