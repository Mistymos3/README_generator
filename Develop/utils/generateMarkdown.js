// function to generate markdown for README


///only if license is not equal to none will this function be called
function renderLicenseBadge(license){
  ///if license not equal to none means they selected a license
  if (license !== "none") {
    return (
      `## Project Description
      ${description}
      `
      ///return
      //inbetween ticks
      //headline
      //then a sentence. tick is instead of concatinating with +
      // `## License
      
      // This project is licensed under the ${license} license.`
  )}
  return `## Description
          No description provided`
}


// function renderTableOfContents(tableOfContents){
//   if(tableOfContents!=="none"){
//     return(
//       `## Table of Contents
//       [Project Description](#Project-Description)
//       [Installation Instructions](#Installation-Instructions)
//       [Tests](#Tests)
//       [Contribution](#Contribution) 
//       [License](#License)
//       [Github](#Github)
//       [Email](#Email)
//       `
//     )
//   }
//   return ` `
// };

function renderInstallation(installation){
  if(installation!=="none"){
    return(
      `## Installation Instructions
      ${installation}
      `
    )
  }
  return 'No instructions set'
};

function renderTests(tests){
  if(tests!=="none"){
    return(
      `## Tests
      ${tests}`
    )
  }
  return ' '
};

function renderContribution(contribution){
  if(contribution!=="none"){
    return(
      `## Contribution 
      ${contribution}
      `
    )
  }
  return "There are no opportunities for contribution."
};

function renderUsername(github){
  if (github!=="none"){
    return(
      `## Github
      Username: ${github}`
    )
  }
  return '## Github'
};

function renderEmail(email){
  if (email!=="none"){
    return(
      `## Email
      ${email}`
    )
  }
  return `No email provided`
};





function generateMarkdown(data) {
  return `# ${data.title}
  ${renderDescription(data.description)}
  ${renderTableOfContents(data.tableOfContents)}
  ${renderInstallation(data.installation)}
  ${renderTests(data.tests)}
  ${renderContribution(data.contribution)}
  ${renderLicenseBadge(data.license)}
  ${renderUsername(data.github)}
  ${renderEmail(data.email)}
`;
}

module.exports = generateMarkdown;
