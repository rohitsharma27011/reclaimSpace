import React, { useState } from "react";
import FoundModal from "../../components/FoundModal";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Set modal visibility to true
  };

  const closeModal = () => {
    setIsModalOpen(false); // Set modal visibility to false
  };

  return (
    <>
      <div
        className="h-[752px] flex justify-center items-center bg-[url('../src/assets/img-8.jpg')] bg-cover bg-center"
        id="home"
      >
        <div className="w-2/3 h-80 flex justify-center items-center ml-80 mr-80 p-2">
          {/* First Image Section */}
          <div className="w-24 h-full m-2 flex flex-col flex-grow m-3 mr-16">
            <div
              className="h-24 w-72 flex flex-grow m-2 ml-8 relative rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:brightness-90 active:scale-95"
              onClick={openModal} // Open modal on click
            >
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="../src/assets/img-2.jpg"
                alt="logo"
              ></img>
            </div>
            <div className="flex h-14 m-2 mt-0 items-center p-2 justify-center">
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                F
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                O
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                U
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                N
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 px-4 py-1 rounded-md">
                D
              </span>
            </div>
          </div>

          {/* Second Image Section */}
          <div
            className="w-24 h-full m-2 flex flex-col flex-grow m-3 ml-16"
            onClick={() => navigate("/claim")}
          >
            <div className="h-24 w-72 flex flex-grow m-2 ml-8 relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:brightness-90 active:scale-95">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="../src/assets/img-3.jpg"
                alt="logo"
              ></img>
            </div>
            <div className="flex h-14 m-2 mt-0 items-center p-2 justify-center">
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                C
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                L
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                A
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 mr-1 px-4 py-1 rounded-md">
                I
              </span>
              <span className="text-3xl text-orange-500 bg-orange-200/70 px-4 py-1 rounded-md">
                M
              </span>
            </div>
          </div>
        </div>

        {/* Conditionally Render Modal */}
        <FoundModal
          isModalOpen={isModalOpen}
          handleOk={closeModal}
          handleCancel={closeModal}
        />
      </div>
    </>
  );
};

export default Home;
