// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

  This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseLink}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach me through my GitHub profile:
  [GitHub - ${data.github}](https://github.com/${data.github})

  Or contact me via email:
  [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
