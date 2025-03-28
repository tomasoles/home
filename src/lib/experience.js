/**
 * @typedef {Object} ExperienceDetails
 * @property {string | StaticImageData} logo - The company's logo.
 * @property {string} profession - The work position
 * @property {string[]} description - The description of the work experience.
 * @property {string} company - The company's name.
 * @property {string} url - The company's website URL.
 * @property {string} date - The work duration.
 */

/** @type {Object[]} */

import wiproLogo from "../assets/NHF-clean-white.png";

export const EXPERIENCE = [
  {
    logo: wiproLogo,
    profession: "Assistant Professor",
    company: "Faculty of Economics and Finance, University of Economics in Bratislava, Slovakia",
    date: "September 2024 - Present",
    url: "https://nhf.euba.sk/katedry/katedra-hospodarskej-politiky/clenovia-katedry/oles-tomas",
    description: [
      "Researching topics in the field of economic growth, inequalities, technological change and natural language processing",
      "Teaching courses and supervising students in the field of empirical labor and growth economics, data science and econometrics",
    ],
  },

];
