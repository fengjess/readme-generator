// function to generate markdown for README
let selectedLicense = [];

function generateMarkdown(data) {
  switch(data.license){
    case "MIT":
    selectedLicense[0] = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    selectedLicense[1] = "(https://opensource.org/licenses/MIT)";
    break;
    case "APACHE 2.0":
    selectedLicense[0] = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    selectedLicense[1] = "(https://opensource.org/licenses/Apache-2.0)";
    break;
    case "GPL 3.0":
    selectedLicense[0] = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    selectedLicense[1] = "(https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case "BSD 3":
    selectedLicense[0] = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    selectedLicense[1] = "(https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "None":
    selectedLicense[0] = "";
    selectedLicense[1] = "None";  
    break;
  }
  return `# ${data.projectname}

  ${selectedLicense[0]}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${data.installation} is used to install dependencies.

  ## Usage

  ${data.usage}

  ## License

  ${selectedLicense[0]}
  ${selectedLicense[1]}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests} is used to run tests.

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
  You can find more of my work at [${data.username}](https://github.com/${data.projectname}).`;
}

//Export function for us with index.js.
module.exports = generateMarkdown;