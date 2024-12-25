import React from "react";
import ClaimHeader from "./claimheader";
import { Avatar, List, Radio, Card } from "antd";
const { Meta } = Card;
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const position = "bottom";
const align = "end";
const Claim = () => {
  return (
    <div className="flex flex-col bg-[url('../src/assets/img-8.jpg')] bg-cover bg-center min-h-screen items-center gap-14 pt-8">
      <div className="w-5/6 border rounded-md shadow-lg shadow-slate-800">
        <ClaimHeader />
      </div>
      <div className="bg-white w-5/6 p-4 border rounded-md shadow-lg shadow-slate-800 mb-8">
        <List
          pagination={{
            position,
            align,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                style={{
                  width: "100%",
                  height: "100px", // Set a consistent height
                }}
              >
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Claim;
