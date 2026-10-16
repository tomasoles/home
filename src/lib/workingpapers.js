/**
 * @typedef {Object} WorkingPaperDetails
 * @property {string} name - The title of the working paper.
 * @property {string} authors - The author line.
 * @property {string} outlet - Series / status line shown as a badge.
 * @property {string} description - The abstract.
 * @property {string} url - Where the paper can be read.
 * @property {string} linkLabel - Label for the link button.
 * @property {string | StaticImageData} previewImage - A figure from the paper.
 */

/** @type {Object[]} */
import aiAutomationFig from "../assets/project preview images/ai_automation_augmentation.jpg";
import firstRungFig from "../assets/project preview images/first_rung_entry_level.jpg";

export const WORKING_PAPERS = [
  {
    name: "The Labor Market Effects of AI Automation and Augmentation",
    authors: "with Francesco Roncone",
    description:
      "Does artificial intelligence automate work or augment workers’ productive capabilities? Our results show that it can do both, through distinct channels that conventional exposure measures obscure. We distinguish these channels by linking U.S. patents to occupations’ tasks and tools, with patent–task matches capturing automation and patent–tool matches capturing augmentation. Using the origins and diffusion of historical AI breakthroughs to predict contemporary local exposure, we find large but opposing labor-market effects. A one-standard-deviation increase in AI automation reduces occupational employment by 21 percent, with little effect on wages; AI augmentation instead raises wages by 8 percent, alongside some employment growth. We also find that a larger AI share within each channel strengthens labor displacement through automation while shifting augmentation’s effects from employment growth toward wage gains. The labor-market consequences of AI therefore depend critically on the balance between automation and augmentation rather than overall exposure alone.",
    url: "https://ideas.repec.org/p/zbw/glodps/1821.html",
    linkLabel: "Read the working paper",
    previewImage: aiAutomationFig,
    technologies: ["GLO Discussion Paper 1821", "2026", "Working paper"],
  },
  {
    name: "Is Generative AI Removing the First Rung? Automation Exposure and Entry-Level Job Ads in Europe",
    authors: "",
    description:
      "Generative AI performs many of the tasks of entry-level jobs. I ask whether it removes entry-level jobs in Europe, with 246 million online job ads posted in 28 European countries between 2020 and 2025 and with automation exposure measured by matching breakthrough patents to the tasks of four-digit occupations. I compare occupations in the top fifth and in the bottom fifth of automation exposure to natural language processing, within countries, before and after the release of ChatGPT. In the top fifth, entry-level ads fell by 24 log points relative to the bottom fifth, and senior ads fell by 20 log points, so the entry-level share did not fall. What changed is what entry-level jobs require. Per standard deviation of automation exposure, the share of entry-level ads that require language, digital, analytical, social, interpersonal, and people-management skills fell by 1.0 to 1.4 percentage points, while manual skill requirements did not change. The declines appeared in 2024 and grew in 2025, and analytical and people-management skill requirements fell more in entry-level ads than in senior ads. Exposure to industrial robots predicts none of the changes in skill requirements.",
    url: `${process.env.PUBLIC_URL}/papers/Oles_First_Rung_2026.pdf`,
    linkLabel: "Download the draft (PDF)",
    previewImage: firstRungFig,
    technologies: ["Draft", "October 2026"],
  },
];
