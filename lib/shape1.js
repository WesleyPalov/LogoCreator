//const { Circle, Triangle, Square } = require("../shapes");
 //let cir = ``;



let shape = 'Circle';


switch (shape) {
  case 'Circle':
    cir = 'circle  cx="150" cy="150" r="100"'
   // console.log(cir);
    break;
  case Square:
    console.log(`<rect x="50" width="200" height="200"`);
    break;
  case Triangle:
    console.log(`<polygon height="100%"  width="100%"  points="0,200 300,200 150,0" `);
    break;

  default:
    console.log('Check your shape selection!');
}
console.log(cir);


module.exports = {Circle, Triangle, Square }