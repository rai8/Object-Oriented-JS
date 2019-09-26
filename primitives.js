let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);
// see now what happens wen we use object as the vaule property
//you notive that the value does not change as in the case of the example above
let a = { value: 20 };
let b = a;
a.value = 30;
console.log(a);
console.log(b);
// this is because when we use object, the value is stored in the mamory thus a and b are pointing to the same memory location
