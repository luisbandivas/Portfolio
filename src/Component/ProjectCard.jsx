import React from "react";

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <div className="bg-[#F7F7FF]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div>
        <div>{title}</div>
        <p>{description}</p>
      </div>
      <div>
        {tags && tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>
    </div>
  );
};

export default ProjectCard;
