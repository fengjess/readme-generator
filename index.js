// required packages and generateMarkdown.js
const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
    },
    {
    type: "input",
    message: "What is your email address?",
    name: "email"    
    },
    {
    type: "input",
    message: "What is your project's name?",
    name: "projectname"    
    },
    {
    type: "input",
    message: "Please write a short description of your project",
    name: "description"    
    },
    {
    type: "list",
    message: "What kind of license should your project have?",    
    name: "license",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"]
    },
    {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation"    
    },
    {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests"    
    },
    {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"
    },
    {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"    
    }
];

// function to write README file
function writeToFile(fileName, data) {
    const inputData = utils(data);
    fs.appendFile(fileName,inputData,(err)=>{if(err){console.log(err)}});
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md",response);
    })
    .catch((err)=>{console.log(err)});
}

// function call to initialize program
init();
