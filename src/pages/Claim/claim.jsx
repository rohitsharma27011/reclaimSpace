import React from "react";
import ClaimHeader from "./claimheader";
import CardList from "../../components/CardList";
import ItemCard from "../../components/ItemCard";

const Claim = () => {
  return (
    <div className="flex flex-col bg-[url('../src/assets/img-8.jpg')] bg-cover bg-center min-h-screen items-center gap-14 pt-8">
      <div className="w-5/6 border rounded-md shadow-lg shadow-slate-800">
        <ClaimHeader />
      </div>
      {/* <div className="bg-white w-5/6 p-4 border rounded-md shadow-lg shadow-slate-800 mb-8">
        <CardList/>
      </div> */}
      <div className="bg-white flex w-5/6  shadow-lg shadow-slate-800 mb-8 border-4 rounded-md">
        <ItemCard text="SEND CLAIM REQUEST"/>
      </div>
    </div>
  );
};

export default Claim;
