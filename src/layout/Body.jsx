import React from "react";
import Hero from "./Hero";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Talks from "./Talks";
import Contact from "./Contact";

const Body = () => {
  return (
    <div className="mx-auto">
      < Hero/>
      < Experiences />
      < Projects />
      < Talks />
      < Contact />
      </div>
  );
};

export default Body;