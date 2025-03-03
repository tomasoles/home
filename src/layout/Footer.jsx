import React from "react";
import { Footer } from "flowbite-react";

const PageFooter = () => {
  return (
    <Footer container className="sticky top-[100vh] bg-secondary">
      <div className="w-full items-center text-center">
        <Footer.Copyright by="Tomáš Oleš" year={2025} />
      </div>
    </Footer>
  );
};

export default PageFooter;
