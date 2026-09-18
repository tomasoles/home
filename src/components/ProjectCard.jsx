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
            className="self-start flex items-center gap-2 rounded-full border border-secondary px-4 py-2 text-sm text-secondary after:content-['_↗'] hover:bg-secondary hover:text-white"
          >
            <FaRegFilePdf className="h-5 w-5" />
            Read in the journal
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
