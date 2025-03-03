import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile.png";
import { FaBirthdayCake } from "react-icons/fa";

const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={"_about"}>
      <div data-aos="fade-left" className="mx-auto flex flex-col gap-4 md:flex-row md:gap-12">
        <div className="md:w-1/2 p-2 flex justify-center">
          <img
            src={profileImg}
            className="rounded-xl w-[480px] shadow-lg"
          ></img>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 md:gap-5 md:self-center">
          <h1 className="font-bold text-center tracking-tighter text-sm md:text-lg md:text-left">
          </h1>
          <p className="text-wrap text-sm font-light md:text-base">
          I am an assistant professor at the University of Economics in Bratislava,
           researching the impact of automation and new technologies on the labor market, 
           with a focus on wage inequality, skill demand, and economic growth. 
           My previous work explored business cycle synchronization and economic convergence in the EU.
          </p>
          <p className="text-wrap text-sm font-light md:text-base">
          Outside of academia, I enjoy cycling, reading, and traveling.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
