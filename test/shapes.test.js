const {Circle, Square, Triangle} = require("../shapes")

// To ccheck circle shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle  cx="150" cy="150" r="100" fill="${this.color}" />`);
    });
  });

// Square shape test
describe('Square', () =>{
    test('builds correctly', () =>{
        const shape = new Square();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render().toEqual(`<rect x="50" width="200" height="200" fill="${this.color}" />`))
    }); 
});

// Triangle check
describe('Triangle', () =>{
    test('builds correctly', () =>{
        const shape = new Triangle();
        let color = ('green')
        shape.setColor(color);
        expect(shape.render().toEqual(`<polygon height="100%"  width="100%"  points="0,200 300,200 150,0" fill="${this.color}" />`))
    }); 
});
