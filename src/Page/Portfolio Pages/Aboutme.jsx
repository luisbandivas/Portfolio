import React from "react";
import JSM from "../../assets/Image/jsm.jpg";

const Aboutme = () => {
  return (
    <div className="bg-[#F7F7FF] flex flex-col">
      <div className="px-4 py-10 font-helvetica leading-7 tracking-wide text-[#6A7B8C]">
        <h3 className="text-center text-xl font-semibold text-[#3A5C67]">
          Hello! I'm Luis
        </h3>
        <p className="mt-6">
          <span className="text-[#3A5C67]">
            I'm a senior student at Laguna University
          </span>
          , studying Computer Science. Throughout my years in college, I have
          <span className="text-[#3A5C67]">
            {" "}
            gained experience in developing desktop and web applications.
          </span>
        </p>
        <p className="mt-4">
          Outside of coding,{" "}
          <span className="text-[#3A5C67]">
            I'm also passionate about designing user interfaces.
          </span>{" "}
          I enjoy working out and playing sports, which help me keep my mind and
          body in shape.
        </p>
        <p className="my-4">
          Looking ahead, I aim to work in the tech industry, where I{" "}
          <span className="text-[#3A5C67]">
            can continue to develop my skills and contribute to innovative
            projects.
          </span>
          Feel free to explore my portfolio or reach out—I’m always open to new
          connections and opportunities!
        </p>
        <button className="rounded-lg px-4 py-2 border-2 border-[#16A085] text-[#16A085]">
          Download CV
        </button>
      </div>
      <div>
        <img src={JSM} alt="DP" />
      </div>
    </div>
  );
};

export default Aboutme;
