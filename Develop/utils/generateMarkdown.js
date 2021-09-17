// function to generate markdown for README


///only if license is not equal to none will this function be called
function generateLicenseBadge(license){
  ///if license not equal to none means they selected a license
  //if license has content
  if (license !== "none") {
    return (`## Project Description
             ${description}`)
      ///return
      //inbetween ticks
      //headline
      //then a sentence. tick is instead of concatinating with +
      // `## License
      
      // This project is licensed under the ${license} license.`
  } else {
  return (`## Description
          No description provided`)
  }
};


function generateTableOfContents(tableOfContents){
  if(tableOfContents !=="none"){
    return(`## Table of Contents
          [Project Description](#Project-Description)
          [Installation Instructions](#Installation-Instructions)
          [Tests](#Tests)
          [Contribution](#Contribution) 
          [License](#License)
          [Github](#Github)
          [Email](#Email)`)
  } else {
  return (``)
  }
};

function generateInstallation(installation){
  if(installation !=="none"){
    return(`## Installation Instructions
            ${installation}`)
  } else {
  return 'No instructions set'
  }
};

function generateTests(tests){
  if(tests !=="none"){
    return(`## Tests
          ${tests}`)
  } else {
  return ('')
  }
};

function generateContribution(contribution){
  if(contribution !=="none"){
    return(`## Contribution 
          ${contribution}`)
  } else {
  return (`There are no opportunities for contribution.`)
  }
};

function generateUsername(github){
  if (github !=="none"){
    return(`## Github
            Username: ${github}`)
  } else {
  return ('## Github');
  }
};

function generateEmail(email){
  if (email!=="none"){
    return (`## Email
            ${email}`);
  } else {
    return (`No email provided`)
  }
};





function generateMarkdown(data) {
  return (`# ${data.title}
  ${generateDescription(data.description)}
  ${generateTableOfContents(data.tableOfContents)}
  ${generateInstallation(data.installation)}
  ${generateTests(data.tests)}
  ${generateContribution(data.contribution)}
  ${generateLicenseBadge(data.license)}
  ${generateUsername(data.github)}
  ${generateEmail(data.email)}`);
}

module.exports = generateMarkdown;
