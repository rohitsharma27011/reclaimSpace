import React from 'react';
import { Modal } from 'antd';

const FoundModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default FoundModal;
