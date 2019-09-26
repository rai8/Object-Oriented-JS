//use of object literals
const circle = {
  radius: 7,
  location: {
    x: 4,
    y: 7
  },
  draw: function() {
    console.log("draw");
  }
};
circle.draw();
// use of a factory function to create an object- sort of works like the new keyword for instantiating an object

function createCircle(radius) {
  return {
    radius: radius,
    drawCircle: function() {
      console.log("drawing circle");
    }
  };
}
const circle1 = createCircle(17);
circle1.drawCircle();
console.log(circle1.radius);
console.log(circle1.constructor);
// using a constructor function to create an object

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function draw() {
      console.log("I am drawing ");
    });
}

const circle2 = new Circle(34);
circle2.draw();
circle2.location = {
  x: 1,
  y: 15
};
delete circle2.radius; // to delete a given property in an object
console.log(circle2.radius);
console.log(circle2);
console.log(circle2.location);
console.log(circle2.constructor); // this will show the constructor property of the object created

const square = new Function(
  "length",
  `
(this.length = length),
    (this.draw = function draw() {
      console.log("I am drawing ");
    });
`
);

let square1 = new square(2);
console.log(square1);
