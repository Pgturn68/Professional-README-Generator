// TODO: Include packages needed for this application
const inquirer= require("inquirer");
const fs=require("fs");
const generatemarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
//title,description,installation instructions, usage information, contribution guidelines, and test instructions,license
//GitHub User Name,email address
const questions = [
    {name: "title",message:"Title of Project"},
    {name: "description",message:"description of Project"},
    {name: "installation",message:"Installation of Project"},
    {name: "usage",message:"Usage of Project"},
    {name: "contribution",message:"Contribution of Project"},
    {name: "testing",message:"Testing of Project"},
    {name: "license",message:"license of Project",type: "list", choices: ["apache","gnu","mit"]},
    {name: "Github",message:"Github of Project"},
    {name: "email",message:"email of Project"},
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
function init() {
    console.log("welcome to my Readme generator");
    inquirer.prompt(questions).then(createfile);    
}
function createfile(answers) {
    const filename="dist/README.md";
    const data= generatemarkdown(answers);
    writeToFile(filename,data);
    console.log("Thank you for using, your Readme.md is in the Dist folder.");
}

// Function call to initialize app
init();
