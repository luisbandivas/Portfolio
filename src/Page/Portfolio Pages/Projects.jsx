import React from "react";
import ProjectCard from "../../Component/ProjectCard";
import JSM from "../../assets/Image/jsm.jpg";

const Projects = () => {
  const projects = [
    {
      image: { JSM },
      title: "Sticky Buddy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas arcu erat vivamus at pellentesque orci gravida consectetur nisi. Morbi dignissim phasellus sed et porta. Augue pharetra augue viverra velit lectus augue. Tempor tristique sed ac nam lorem ante laoreet. ",
      tags: ["C#", ".NET", "Windows Form"],
    },
    {
      image: { JSM },
      title: "Sticky Buddy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas arcu erat vivamus at pellentesque orci gravida consectetur nisi. Morbi dignissim phasellus sed et porta. Augue pharetra augue viverra velit lectus augue. Tempor tristique sed ac nam lorem ante laoreet. ",
      tags: ["C#", ".NET", "Windows Form"],
    },
    {
      image: { JSM },
      title: "Sticky Buddy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas arcu erat vivamus at pellentesque orci gravida consectetur nisi. Morbi dignissim phasellus sed et porta. Augue pharetra augue viverra velit lectus augue. Tempor tristique sed ac nam lorem ante laoreet. ",
      tags: ["C#", ".NET", "Windows Form"],
    },
  ];

  return (
    <div className="bg-[#F7F7FF] flex flex-col items-center ">
      <p className="text-[#6A7B8C]">SOME OF MY LATEST PROJECTS</p>
      <div>
        {projects.map((projects, index) => (
          <ProjectCard
            key={index}
            image={projects.image}
            title={projects.title}
            description={projects.description}
            tags={projects.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
