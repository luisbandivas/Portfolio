import React from "react";
import logo from "../../assets/Image/logo.png";

const Welcome = () => {
  return (
    <div className="h-screen bg-[#232323] flex flex-col items-center justify-between text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="font-playfair text-[#F5F5F5] font-semibold text-5xl pb-4">
          <span className="text-[#16A085]">L</span>UIS
          <span className="text-[#16A085]"> M</span>ARIO BANDIVAS
        </p>
        <p className="text-[#F5F5F5] font-helvetica font-semibold text-base">
          WEB DEVELOPER & UI ENTHUSIAST
        </p>
      </div>
      <div>
        <img src={logo} alt="Logo" className="h-6 mb-10" />
      </div>
    </div>
  );
};

export default Welcome;
