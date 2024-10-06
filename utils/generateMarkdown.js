// A function to render license badges
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        default:
            return '';
    }
}

// A function to render license links
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'GNU GPLv3':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'ISC':
            return 'https://opensource.org/licenses/ISC';
        default:
            return '';
    }
}

// A function to generate markdown for the license section
function renderLicenseSection(license) {
    return `## License ${renderLicenseBadge(license)}  ${renderLicenseLink(license)}  
    This project is licensed under the ${license} license. 
    Click the badge for more information.`;
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseSection(data.license)}  
  ## Description  
  ${data.description}  
  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contribution](#contribution)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  ## Installation  
  ${data.installation}  
  ## Usage  
  ${data.usage}  
  ## Contribution  
  ${data.contribution}  
  ## Tests  
  ${data.tests}  
  ## Questions  
  For questions, please contact me at:  
  GitHub: [${data.github}](https://github.com/${data.github})  
  Email: [${data.email}]  
  `;
}

export default generateMarkdown;
