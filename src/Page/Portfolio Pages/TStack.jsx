import React from "react";

const TStack = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] py-16">
      <p className="text-[#6A7B8C]">Some technologies I've worked with:</p>
      <div className="flex flex-row flex-wrap justify-center px-12">
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
        <div className="bg-red-300 h-20 w-20 mx-2 mt-4"></div>
      </div>
    </div>
  );
};

export default TStack;
