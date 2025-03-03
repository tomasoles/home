import React from "react";
import { FaRegFilePdf } from "react-icons/fa"; // Import the PDF icon

const TalkCard = ({ name, conference, pdfLink, isReversed }) => {
  return (
    <div
      data-aos="fade-up"
      className={`mx-auto flex flex-col gap-4 md:flex-row md:gap-12 md:my-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-6 md:w-full md:gap-6">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-left md:text-3xl">{name}</h1>
          {pdfLink && (
            <a
              href={`${pdfLink}`}  
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg gap-1 after:content-['_↗'] text-white flex hover:text-sky-500 ml-16"  // Increased margin-left
            >
              <FaRegFilePdf className="h-6 w-6 text-white hover:text-sky-500" />
            </a>
          )}
        </div>
        <p className="text-wrap text-sm font-light md:text-base text-left">{conference}</p>
        <div className="flex flex-wrap gap-2">
          {/* You can add additional tech tags here if needed */}
        </div>
      </div>
    </div>
  );
};

export default TalkCard;
