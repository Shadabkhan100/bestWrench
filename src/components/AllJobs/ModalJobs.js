import React from "react";
import { Modal, Button } from "antd";

const CardWithModal = ({ showModal, setshowModal }) => {
  const handleCancel = () => {
    setshowModal(false); // Close the modal when cancel button is clicked
  };

  return (
    <>
      <Modal
        open={showModal}
        onCancel={handleCancel} // Pass the function, not the result
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      ></Modal>
    </>
  );
};

export default CardWithModal;
