import React from "react";
import SectionContainer from "../components/SectionContainer";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si"; // Google Scholar Icon
import { Button, Flowbite } from "flowbite-react";
import { bitbucketProfile, facebookProfile, githubLink, linkedInProfile, scholarProfile } from "../constants";
import { customButtonTheme } from "../themes/ButtonTheme";

const Contact = () => {
  return (
    <SectionContainer sectionName={"_contact"} id={"contact"}>
      <div data-aos="fade-up">
        <h2 className="text-sm text-center md:text-base">
        Curious to explore more? Let's connect and discuss potential research collaborations. Feel free to reach out—I'm always open to exchanging ideas.
        </h2>
        <br />
        <div className="flex flex-row gap-3 items-center justify-center text-white">
          <MdEmail className="text-center h-5 w-5 md:h-10 md:w-10" />
          <a href="mailto:tomas.oles@euba.sk" className="font-bold text-2xl underline decoration-sky-500 md:text-4xl">
            tomas.oles@euba.sk
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col gap-3">
        <h2 className="text-sm text-center md:text-sm">
          You may also find me on these platforms:
        </h2>
        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <Flowbite theme={{ theme: customButtonTheme }}>
            <Button pill color="primary" href={linkedInProfile} target="_blank">
              <AiFillLinkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button pill color="primary" href={scholarProfile} target="_blank">
              <SiGooglescholar className="mr-2 h-5 w-5" /> {/* Google Scholar Icon */}
              Scholar
            </Button>
            <Button pill color="primary" href={githubLink} target="_blank">
              <FaSquareGithub className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </Flowbite>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
