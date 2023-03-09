// lib for working wiith inquirer
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
// to work with file system
const fs = require('fs');
const { Console } = require('console');
// to dounload lib shapes
const {Circle, Square, Triangle} = require("./lib/shapes");




const generateSVG = ({ letters, color, bGround, shape }) => {
let userShape 
  switch (shape) {
    case 'Circle':
 userShape = new Circle (bGround)
   
      break;
    case 'Square':
      userShape = new Square (bGround)
      break;
    case 'Triangle': 
    userShape = new Triangle (bGround)
      break;
  
    default:
      console.log('Check your shape selection!');
  }
  return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

${userShape.render()}

  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${letters}</text>

</svg>`;
}


inquirer
  .prompt([ 
        {
        type: 'input',
        name: 'letters',
        message: 'Please enter three letters of your logo (Required)',
        validate: lettersInput => {
      //  console.log(lettersInput.length)
            if (lettersInput.length == 3) {
                return true;
            } else {
                console.log('Please enter three letters!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "color", 
        message: " Please enter the color of your letter", 
    
      },
      {
        type: "input",
        name: "bGround", 
        message: "Please enter the color of logo background", 
    
      },


    
      {
    type: "list",
    name: "shape", 
    message: "Please select the shape of your logo", 
    choices: ["Circle", "Triangle", "Square"],
  },



 
  ])

  

  .then((answers) => {
  const SVGContent = generateSVG(answers);
    console.log(`Your shape is ${answers.shape} and letters are ${answers.letters} font color ${answers.color} and background color is ${answers.bGround}`)
    fs.writeFile("generated-logo.svg",  SVGContent, (err) => 
        err ? console.log(err) : console.log("Successfully generated SVG file ")
     )
  });
