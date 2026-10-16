import React from "react";
import { FaRegFilePdf } from "react-icons/fa";

const WorkingPaperCard = ({
  previewImage,
  name,
  authors,
  description,
  technologies = [],
  url = null,
  linkLabel = "Read the paper",
  isReversed,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`mx-auto flex flex-col gap-4 md:flex-row md:gap-12 md:my-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 p-2 self-start">
        <img
          src={previewImage}
          alt=""
          className="rounded-lg bg-white p-3 w-full"
        />
      </div>
      <div className="flex flex-col gap-5 md:w-1/2">
        <h1 className="font-bold text-center md:text-3xl md:text-left text-white">
          {name}
        </h1>
        {authors && (
          <p className="text-sm font-light italic text-center md:text-left text-white">
            {authors}
          </p>
        )}
        <p className="text-wrap text-sm font-light md:text-base text-white">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-full border border-sky-500 text-xs md:text-sm text-white px-5 py-2"
            >
              {item}
            </div>
          ))}
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 rounded-full border border-white px-4 py-2 text-sm text-white after:content-['_↗'] hover:bg-white hover:text-secondary"
          >
            <FaRegFilePdf className="h-5 w-5" />
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkingPaperCard;
