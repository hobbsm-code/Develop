import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// An array of questions for user input that will be used to generate the README.md file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?\n'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.\n'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.\n'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.\n'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.\n'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.\n'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.\n',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?\n'
    }
];

// A function to write the README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`✔️ Success! Your README.md file has been generated!`)
    );
}

// Prompt the user with the questions array and write the README.md file
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.mkdir('./output', { recursive: true }, (err) => {
                if (err) throw err;
            });
            const markdown = generateMarkdown(answers);
            writeToFile('./output/README.md', markdown);
    });
}

// Function call to initialize app
init();
