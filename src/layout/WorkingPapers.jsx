import React from "react";
import SectionContainer from "../components/SectionContainer";
import WorkingPaperCard from "../components/WorkingPaperCard";
import { WORKING_PAPERS } from "../lib/workingpapers";

const WorkingPapers = () => {
  return (
    <SectionContainer
      sectionName={"_work in progress"}
      id={"work_in_progress"}
      bgColor="bg-secondary"
    >
      {WORKING_PAPERS.map((paper, index) => (
        <WorkingPaperCard
          key={index}
          previewImage={paper.previewImage}
          name={paper.name}
          authors={paper.authors}
          description={paper.description}
          technologies={paper.technologies}
          url={paper.url}
          linkLabel={paper.linkLabel}
          isReversed={index % 2 === 1}
        />
      ))}
    </SectionContainer>
  );
};

export default WorkingPapers;
