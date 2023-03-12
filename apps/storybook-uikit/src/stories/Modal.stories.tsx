import React from "react";
import { Modal, Button } from "@nixjs23n6/baseui-kit";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feedback/Modal",
  component: Modal,
};

export const Default: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  function onClose() {
    setOpen(false);
  }

  function onOpen() {
    setOpen(true);
  }
  return (
    <>
      <Button color="primary" size="md" type="button" onClick={onOpen}>
        Open Dialog
      </Button>
      <br />
      <br />
      <Modal onClose={() => false} open={open}>
        <Modal.Header className="pl-16 pt-16 pr-16">
          <h3>Payment successful</h3>
        </Modal.Header>
        <Modal.Body className="pl-16 pr-16 mb-16">
          <p>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
        </Modal.Body>
        <Modal.Footer className="pl-16 pr-16 pb-16">
          <Button type="button" onClick={onClose}>
            Got it, thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
