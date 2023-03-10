'use strict';

const one = 1;
const two = "2";
const three = "e";
const result0 = one + two;
console.log(result0);
output("ln7", result0);
// we can manually change the type of some strings. parseInt(string) will change a number that is a string into an actual number. Use it on our two variable
let result1 = one + parseInt(two);
output("ln10", result1);

// We didn't get any output from line 9 above. What change would you need to make to get it to work? Make the change. Hint...in the bottom left corner of the window there is a button 'Console'. Click it.

// what about multiplication?
let result2 = one * two;
output("ln16", result2);
// was the result what you expected?

// what about this? Explain what is happening. What does NaN mean? Not a Number
let result3 = one * three;
output("ln21", result3);

// let's try changing the value of two
let too = 4;

let result4 = one + too;
output("ln27", result4);
// did we get the value we expected? Why didn't it work?
// try adding 'use strict'; to the first line of our code then look at the console again. Fix the error.

const myArray = [1,2,3,5];
//add the number 4 to the end of the array

myArray.push(4);

console.log(myArray);
// it would be nice if our numbers were in the correct order. We will learn how to sort later, for now let's remove the last two items in the array and then add them back in the correct numerical order.

myArray.pop();
myArray.pop();
myArray.push(4);
myArray.push(5);

console.log(myArray);


// The code below is used to aid in displaying the results.
function output(line, content) {
  const outputElement = document.querySelector(".output");
  outputElement.innerHTML += `<p>${line} : ${content}</p>`;
}
