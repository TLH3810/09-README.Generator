// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  inquirer
  .prompt({
    name:'action',
    type: 'list',
    message:'What license would you like to choose?',
    choices: [
      'GNU General Public License v3.0'
    ],
  })
  .then((answer) =>{
    switch (answer.action){
      case 'GNU General Public License v3.0';
        break;
      case '',
    }
  })


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  readmeContents= `# ${data.title}
  ## Description: ${data.description}
  ## Table of Contents
  ## installation
  ## ${data.usage}'
  contributing
  tests 
  ##Questions:
  ## License
`;
  readmeContents = readmeContents + 
}

module.exports = generateMarkdown;
