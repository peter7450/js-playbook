// Exercise 1: Create a function greet that takes a name and returns a greeting.

function greet(name){
    return `Hello ${name}`;
}
console.log(greet("Castellanos"));
console.log(greet("Brendan"));

// Exercise 2: Create a function add that takes two numbers and returns their sum.

function addTwoNumbers(a, b){
    return a + b;
}
console.log(addTwoNumbers(5, 10));
console.log(addTwoNumbers(20, 10));

//Exercise 3: Create a function isAdult that takes an age and returns true if 18 or older, false otherwise.

function isAdult(age){
    if(age >= 18){
        return "true";
    } else {
        return "false";
    }
}
console.log(isAdult(18));
console.log(isAdult(13));
