class Shape{

constructor(color){
this.color = color
}
setColor(color){
this.color=(color);
}
}

class Circle extends Shape{
   constructor(color) {
      super(color)
   }
     render(){
        return `<circle  cx="150" cy="150" r="100" fill="${this.color}" />`
     }
}
class Square extends Shape{
   constructor(color) {
      super(color)
   }
     render(){
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`
     }
}

class Triangle extends Shape{
   constructor(color) {
      super(color)
   }
      render(){
        return `<polygon height="100%"  width="100%"  points="0,200 300,200 150,0" fill="${this.color}" />`
      }
}

module.exports = {Circle, Triangle, Square }











