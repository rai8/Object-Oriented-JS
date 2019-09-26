function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("I am drawing");
  };
}
const circle = new Circle(10);
console.log(circle);
circle.draw();
// enumerating the properties in an object
for (let key in circle) {
  console.log(key);
  console.log(key, circle[key]);
  // this will retrun both properties in an object
}
// to get the values of the propertien given we can use the bracket notation

// to get only the properties and not the method
const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("the circle has a radius");
