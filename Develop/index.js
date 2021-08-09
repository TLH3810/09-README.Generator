// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const { send } = require("process");

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
    message: 'What are the steps required to install your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What would the user need to know about using the repo?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can the user contribute?'
},
{
    type: 'input',
    name: 'tests',
    message: 'What is the command to run tests?'
},
{
    type: 'list',
    name: 'license',
    message:'What license would you like to choose?',
    choices: [
        'GNU General Public License v3.0',
        'Apache License 2.0',
        'Eclipse Public License 1.0',
        'Mozilla Public License 2.0',
      ],
},
{
    type: 'input',
    name: 'email',
},
{
    type: 'input',
    name: 'githubID',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answer => generateMarkdown(answer))
    .then(generateReadme => writeToFile("README.md", generateReadme));
