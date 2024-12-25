import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Button, message, Upload, Input, Select } from 'antd';

const { TextArea } = Input;

const uploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const FoundModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const handleTextAreaChange = (e) => {
    console.log('TextArea Change:', e.target.value);
  };

  const handleSelectChange = (value) => {
    console.log('Selected:', value);
  };

  return (
    <Modal
      title="Upload"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="p-6"
      width={600}
    >
      <div className="flex flex-col space-y-4">
        {/* File Upload */}
        <div className="flex justify-center">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} className="w-full">
              Click to Upload
            </Button>
          </Upload>
        </div>

        {/* TextArea */}
        <div>
          <TextArea
            showCount
            maxLength={100}
            onChange={handleTextAreaChange}
            placeholder="Add your comments here"
            className="w-full mt-4"
            style={{ resize: 'none' }}
          />
        </div>

        {/* Select Dropdown */}
        <div>
          <Select
            showSearch
            className="w-full mt-4"
            placeholder="Search to Select"
            optionFilterProp="label"
            onChange={handleSelectChange}
            options={[
              { value: '1', label: 'Electronics' },
              { value: '2', label: 'Bags and Wallet' },
              { value: '3', label: 'Wearables' },
              { value: '4', label: 'Others..' },
            ]}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FoundModal;
