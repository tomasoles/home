import React from 'react';
import SectionContainer from '../components/SectionContainer';
import TalkCard from '../components/TalkCard';
import { TALKS } from '../lib/talks';

const Talks = () => {
  return (
    <SectionContainer
      sectionName={"_talks"}
      id={"talks"}
      bgColor="bg-secondary"
    >
      {TALKS.map((talk, index) => (
        <TalkCard
          key={index}
          name={talk.name}
          conference={talk.conference}
          pdfLink={talk.pdfLink}
          logo={talk.logo}
          isReversed={index % 2 === 1} // Alternate layout for reverse order
        />
      ))}
    </SectionContainer>
  );
};

export default Talks;
