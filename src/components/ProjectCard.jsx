import React from "react";
import TechPill from "../components/TechPill";
import { FaRegFilePdf } from "react-icons/fa";

const ProjectCard = ({
  previewImage,
  name,
  description,
  technologies,
  url = null,
  isReversed,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`mx-auto flex flex-col gap-4 md:flex-row md:gap-12 md:my-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 p-2">
        <img src={previewImage} alt="" className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-6 md:w-1/2 md:gap-6">
        <h1 className="font-bold text-center md:text-3xl md:text-left text-black">{name}</h1>
        <p className="text-wrap text-sm font-light md:text-base text-black">{description}</p>
        <div className="flex flex-wrap gap-2">
          <TechPill technologies={technologies} />
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start p-1.5 rounded-lg gap-1 after:content-['_↗'] text-black flex hover:text-sky-500"
          >
            <FaRegFilePdf className="h-6 w-6 text-black hover:text-sky-500" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
