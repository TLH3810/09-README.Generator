// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project name?'
},
{
    type: 'input',
    name: 'description',
    message: 'What is your project description?'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project'
},
{
    type: 'input',
    name: 'usage',
},
{
    type: 'input',
    name: 'contributing',
},
{
    type: 'input',
    name: 'tests',
},
{
    type: 'input',
    name: 'license',
    message:'What license would you like to choose?',
    choices: [
        'GNU General Public License v3.0'
      ],
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answer => generateMarkdown(answer))
    .then(generateReadme => writeToFile("README.md", generateReadme));
