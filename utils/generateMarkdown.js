// function that returns a license badge based on which license is passed in
// if no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// function that returns the license link
// if no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `[License](#license)`
    )
  }
  return ''
}

// function that returns the license section of README
// if no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License 
      This is available under the ${license} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installations](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * ${renderLicenseLink(data.license)}


  ## Installation

  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}
  
  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
