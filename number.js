let number = 10;
function increase(number) {
  number++;

  console.log(number);
}
increase(number);
//console.log(number);
//you can also use the object as a reference

let obj = { value: 10 };
function numberIncrease(obj) {
  obj.value++;
}
numberIncrease(obj);
console.log(obj);
