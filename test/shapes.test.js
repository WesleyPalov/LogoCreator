const {Circle, Square, Triangle} = require("../lib/shapes")

// To ccheck circle shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle("red");
      
      expect(shape.render()).toEqual(`<circle  cx="150" cy="150" r="100" fill="red" />`);
    });
  });

// Square shape test
describe('Square', () =>{
    test('builds correctly', () =>{
        const shape = new Square("red");
   
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="red" />`)
    }); 
});

// Triangle check
describe('Triangle', () =>{
    test('builds correctly', () =>{
        const shape = new Triangle("red");

        expect(shape.render()).toEqual(`<polygon height="100%"  width="100%"  points="0,200 300,200 150,0" fill="red" />`)
    }); 
});
