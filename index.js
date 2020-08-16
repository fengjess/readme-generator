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
    message: "Please write a short description of your project"
    name: "description"    
    },
    {
    type: "list",
    message: "What kind of license should your project have?"    
    name: "license",
    choices: ["MIT","MPL","GPL","Apache","Boost"]
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
    name: "contributing"    
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
