import React from "react";
import ImageCarousel from "./ImageCarousel";
const ItemCard = (props) => (
  <div className="flex flex-row min-w-full">
    <div className="w-1/5 border-r-2 ">
        <ImageCarousel/>
    </div>

    <div className="w-3/5 border-r-2">This is description</div>

    <div className="w-1/5">{props.text}</div>
  </div>
);
export default ItemCard;
