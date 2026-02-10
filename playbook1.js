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

// Exercise 4: Create a function getFullName that takes first name and last name, returns full name.

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Declan", "Mostaf"));
console.log(getFullName("Olive", "Vera"));

// Exercise 5: Create a function calculateRectangleArea that takes width and height, returns area.

function calculateRectangleArea(width, height){
    area = width * height;
    return area;
}
console.log(calculateRectangleArea(5, 5));
console.log(calculateRectangleArea(10, 10));

// Exercise 6: Create a function isEven that returns true if number is even, false if odd.

function isEven(number){
    if(number % 2 === 0){
        return "true";
    } else {
        return "false";
    }
}
console.log(isEven(4));
console.log(isEven(9));