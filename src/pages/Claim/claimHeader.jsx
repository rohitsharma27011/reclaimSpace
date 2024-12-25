import React from "react";
import { Input, Select } from "antd";
import { Collapse } from "antd";
const { Search } = Input;
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
const fileList = [
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];
const onSearch = (value, _e, info) => console.log(info?.source, value);
const ClaimHeader = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className=" bg-white flex flex-col border rounded-md">
      <div className="flex border-b border-b-black">
        <Search
          size="large"
          placeholder="Description of the object"
          allowClear
          onSearch={onSearch}
          style={{
            width: '100%',
          }}
        />
      </div>
      <div>
        <Collapse
          items={[
            {
              key: "1",
              label: "ADD FILTERS",
              children: (
                <div className="flex flex-row">
                  <div className="w-3/4">
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture"
                      defaultFileList={fileList}
                    >
                      <Button type="primary" icon={<UploadOutlined />}>
                        Upload Images
                      </Button>
                    </Upload>
                  </div>
                  <div className="flex flex-grow justify-center">
                    <Select
                      placeholder="Item Type"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                      ]}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ClaimHeader;
