import React from "react";
import Hero from "./Hero";
import Experiences from "./Experiences";
import Projects from "./Projects";
import WorkingPapers from "./WorkingPapers";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="mx-auto">
      < Hero/>
      < Experiences />
      < Projects />
      < WorkingPapers />
      < Contact />
      </div>
  );
};

export default Body;