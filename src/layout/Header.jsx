import React, { useState } from "react";
import { Navbar } from "flowbite-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#hello");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      fluid
      className="fixed top-0 left-0 right-0 z-50 bg-darkblue p-6 md:px-16"
    >
      <Navbar.Brand>
        <span className="whitespace-nowrap font-semibold text-white">
          tomas-oles
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="#hello"
          className={`${activeLink === "#hello" ? "border-b-2 border-white" : null} text-white md:hover:text-white-600 hover:border-b-2 hover:border-white`}
          onClick={() => handleLinkClick("#hello")}
        >
          _hello
        </Navbar.Link>
        <Navbar.Link
          href="#selected_publications"
          className={`${activeLink === "#selected_publications" ? "border-b-2 border-white" : null} text-white hover:border-b-2 hover:border-white md:hover:text-white-600`}
          onClick={() => handleLinkClick("#selected_publications")}
        >
          _selected publications
          </Navbar.Link>
        <Navbar.Link
          href="#talks"
          className={`${activeLink === "#talks" ? "border-b-2 border-white" : null} text-white hover:border-b-2 hover:border-white md:hover:text-white-600`}
          onClick={() => handleLinkClick("#talks")}
        >
          _talks 
        </Navbar.Link>
        <Navbar.Link
          href="#contact"
          className={`${activeLink === "#contact" ? "border-b-2 border-white" : null} text-white hover:border-b-2 hover:border-white md:hover:text-white-600`}
          onClick={() => handleLinkClick("#contact")}
        >
          _contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
