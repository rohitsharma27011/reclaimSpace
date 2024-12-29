import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ImageCarousel = () => (
  <div className="p-2">
    <Carousel arrows infinite={true} style={{ width: "100%" }}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);
export default ImageCarousel;
