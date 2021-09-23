const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
///array of Qs for inquirer
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {  
        type: "input",
        name: "email",
        message: "What is your eMail address?"
    },

    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    
    },
    
    {
        type: "input",
        name: "tableOfContents",
        message: "Would you like to include a Table of Contents?"
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
        
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
   
    {
        type: "input",
        name: "tests",
        message: "Which tests were used?"
    },
    
    {
        type: "input",
        name: "contribution",
        message: "How can users contribute?"
    },
    
    {
        type: "list",
        name: "license",
        message: "Which licenses do you want to use?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
        },   
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
};







// function to initialize program
function init() {
    ///when call inquirer.prompt it'll run through all questions then 
    inquirer.prompt(questions)
    ///then whatever you call the answers are called here (inquirerResponse)..for now. 
                            ///then take the answers and pipe them into a callback
    .then((inquirerResponses) => {
        ///what i want to do with them
        console.log('Generate Readme');
        ///then invoke(call) writeFile which will take the data and fileName
        ///calling it with the word README b/c thats the name of the file that'll be generated
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        // console.log(inquirerResponses)
    })
}



// function call to initialize program
init();