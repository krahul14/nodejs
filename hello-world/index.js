// const math = require('./math.js');  ----> 1st way of importing
const { add, subtract } = require('./math.js');  //----> 2nd way of importing
console.log("Hey there, I'm a Node.js script!");
// console.log("Mathe value is: ", math.add(1, 2)); 
// console.log("Mathe value is: ", math.subtract(1, 2));
console.log("Mathe value is: ", add(1, 2));
console.log("Mathe value is: ", subtract(1, 2));