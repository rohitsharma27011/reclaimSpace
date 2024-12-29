import React from 'react';
import { Avatar, List, Card } from "antd";
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
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 1",
  },
];
const position = "bottom";
const align = "end";
const CardList= ()=> {
  return (
    <div>
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
                title={item.title}
                description="This is the description"
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default CardList
