// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== 'None'){
   if (license === 'GNU General Public License v3.0'){
     return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`;
   }
   if (license === 'Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  }
   if (license === 'Eclipse Public License 1.0'){
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`
  }
  if (license === 'Mozilla Public License 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  }
 }
 return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    if (license === 'GNU General Public License v3.0'){
      return `http://www.gnu.org/licenses/gpl-3.0`;
    }
    if (license === 'Apache License 2.0'){
     return `(https://opensource.org/licenses/Apache-2.0)`;
   }
   if (license === 'Eclipse Public License 1.0'){
     return `(https://opensource.org/licenses/EPL-1.0)`;
   }
   if (license === 'Mozilla Public License 2.0'){
     return `(https://opensource.org/licenses/MPL-2.0)`;
   }
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return renderLicenseBadge(license)+ renderLicenseLink(license);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  readmeContents= `# ${data.title}
  ## Description: ${data.description}
  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  * [License] (#license)

  ## Installation 
  
  To install the necessary dependancies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage 
  
  ${data.usage}

  ## Contributing 
  
  ${data.contributing}

  ## Tests 
  
  Run tests using the below command:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  
  If you have any questions about the repo, contact me directly at ${data.email}.
  You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  ## License
  ${renderLicenseSection(data.license)}
`;
return readmeContents;
}

module.exports = generateMarkdown;
