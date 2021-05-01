// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="apache")return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
if(license==="gnu") return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
if(license==="mit")return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## description
${data.description}
## contents
* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [testing](#testing)
* [contact](#contact)
## installation
${data.installation}
## usage
${data.usage}
## contribution
${data.contribution}
## testing
${data.testing}
## contact
* Github: ${data.Github}
* email: ${data.email}
`;
}

module.exports = generateMarkdown;
