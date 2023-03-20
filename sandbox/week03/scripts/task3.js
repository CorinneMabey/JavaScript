/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2

function add(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum

function addNumbers() {
    const number1 = document.getElementById("addend1").value;
    const number2 = document.getElementById("addend2").value;
    sum = add(number1, number2);
    let outputElement = document.getElementById("sum");
    outputElement.value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonAdd = document.getElementById("addNumbers");
buttonAdd.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

function subtractNumbers() {
    const number1 = document.getElementById("minuend").value;
    const number2 = document.getElementById("subtrahend").value;
    difference = subtract(number1, number2);
    let outputElement = document.getElementById("difference");
    outputElement.value = difference;
}

const buttonSubtract = document.getElementById("subtractNumbers");
buttonSubtract.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

function mulitplyNumbers() {
    const number1 = document.getElementById("factor1").value;
    const number2 = document.getElementById("factor2").value;
    product = multiply(number1, number2);
    let outputElement = document.getElementById("product");
    outputElement.value = product;
}

const buttonMultiply = document.getElementById("multiplyNumbers");
buttonMultiply.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}

function divideNumbers() {
    const number1 = document.getElementById("dividend").value;
    const number2 = document.getElementById("divisor").value;
    quotient = divide(number1, number2);
    let outputElement = document.getElementById("quotient");
    outputElement.value = quotient;
}

const buttonDivide = document.getElementById("divideNumbers");
buttonDivide.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();

// Step 2: Declare a variable to hold the current year
let year = date.getFullYear();
console.log(`Year: ${year}`);

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let arrowFunction = () => {};
function functionDeclaration () {};

let odds = numbers.filter((value) => {
    let remainder = value % 2;
    if (remainder) {
        return value;
    }
});

document.querySelector("#odds").innerHTML = odds;


// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let evens = numbers.filter((value) => {
    let remainder = value % 2;
    if (!remainder) {
        return value;
    }
});

document.querySelector("#evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let sum = numbers.reduce((total, value) => {
    return total + value;
});

document.querySelector("#sumOfArray").innerHTML = sum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

let multiples = numbers.map((value) => {
    let multiple = value * 2;
    return multiple;
})

document.querySelector("#multiplied").innerHTML = multiples;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let sum2 = multiples.reduce((total, value) => {
    return total + value;
});

document.querySelector("#sumOfMultiplied").innerHTML = sum2;
