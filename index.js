const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
const { Console } = require('console');




inquirer
  .prompt([ 
        {
        type: 'input',
        name: 'letters',
        message: 'Please enter three letters of your logo (Required)',
        validate: lettersInput => {
            if (lettersInput) {
                return true;
            } else {
                console.log('Please enter no more than three letters!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "color", 
        message: "Please enter the color of your letter", 
    
      },
      {
        type: "input",
        name: "bGround", 
        message: "Please enter the color of logo background", 
    
      },


    
      {
    type: "checkbox",
    name: "shape", 
    message: "Please select the shape of your logo", 
    choices: ["circle", "triangle", "square"],
  },

  ])
  .then((answers) => {
    console.log(answers);
    console.log(`Your shape is ${answers.shape} and letters are ${answers.letters} font color ${answers.color} and background color is ${answers.bGround}`)
    fs.writeFile("log.txt",  JSON.stringify(answers), (error) => {
        error ? console.log(error) : console.log("done")
    }
    
    )

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });