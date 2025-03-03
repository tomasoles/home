/**
 * @typedef {Object} ProjectDetails
 * @property {string} name - The name of the project.
 * @property {string} description - The description of the project.
 * @property {string} url - The URL of the project.
 * @property {string | StaticImageData} previewImage - The preview image of the project.
 * @property {string[]} technologies - The technologies used in the project.
 */


/** @type {Object[]} */

import clubsProject from "../assets/project preview images/clubs.png"
import aiProject from "../assets/project preview images/ai_exposure_ind_occ_page-0001.jpg"
import superstarProject from "../assets/project preview images/superstar.jpg"



export const PROJECTS = [
    {
        name: 'Impact of Cohesion Funds on Convergence Club\'s Economic Growth (with Martin Hudcovský)',
        description: 'This paper estimates the impact of European Structural and Investment Funds (ESIF) on economic growth across European regions, based on the convergence club hypothesis. Using the Phillips and Sul test, we classify regions into three convergence clubs: capital cities and metropolitan areas, core countries, and the periphery. We find a persistent core-periphery pattern in output per capita, with capital cities and metropolitan areas converging almost four times faster. Growth regressions show that ESIF expenditures-to-GDP positively impact short-run growth in the core and periphery clubs, with a stronger effect in the periphery. These results remain robust when adjusting for ESIF expenditures-to-population.',
        url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/grow.12739',
        previewImage: clubsProject,
    },
    {
        name: 'Impact of Robots and Artificial Intelligence on Labor and Skill Demand: Evidence from the UK (with Martin Lábaj and Gabriel Procházka)',
        description: "Over the past four decades, automation has replaced routine tasks performed by medium-skilled workers, contributing to labor market polarization. With the rise of artificial intelligence, this trend may now extend to non-routine tasks performed by high-skilled workers. Using textual analysis of patent descriptions, we construct novel occupational exposures to robot and AI technologies to analyze changes in labor and skill demand in the UK over the last decade. We find that middle-income workers are primarily exposed to robots, while AI exposure increases across income percentiles. Robot exposure is strongest among low-education workers, while AI affects mostly college graduates. Robot automation reduces demand for low-skilled workers, while AI shifts demand away from high-skilled workers. Joint estimation shows robot automation increases demand for skilled workers, whereas AI weakly decreases it. These findings suggest significant labor market shifts with implications for wage inequality and the future of work.",
        url: 'https://nhf.euba.sk/www_write/files/katedry/khp/working-papers/dep_wp029.pdf',
        previewImage: aiProject,
    },
    {
        name: 'Superstar Firms and Labor Share Decline: The Role of Digitalization in France, Germany, Italy, and Spain',
        description: "This paper examines the interaction between market concentration, firm size, and labor outcomes through the superstar firms hypothesis. Using firm-level data from CompNet and digitalization indicators from EU-KLEMS, the analysis finds that labor share negatively correlates with total factor productivity, supporting the idea that high-productivity superstar firms allocate less to labor. At the industry level, market concentration is positively associated with productivity and wages, but negatively with labor share. Firm size within industries also shows a positive link to productivity and wages, but a negative link to labor share. While digital investments boost productivity and wages among larger firms, they do not significantly slow labor share declines. The findings suggest that digitalization benefits larger firms, while labor share continues to decline as productivity and concentration rise.",
        url: 'https://nhf.euba.sk/www_write/files/katedry/khp/working-papers/dep_wp029.pdf',
        previewImage: superstarProject,
    },
    
];
