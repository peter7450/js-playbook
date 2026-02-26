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

// Exercise 7: Create a function getFirstChar that returns the first character of a string.
function getFirstChar(name){
    fullName = name[0];
    return fullName;
}
console.log(getFirstChar("Spotify"));
console.log(getFirstChar("Boomplay"));

// Exercise 8: Create a function shout that converts text to uppercase and adds exclamation marks.

function specialChar(name){
    return name.toUpperCase() + "!!!";
}
console.log(specialChar("hello"));
console.log(specialChar("morning"));

// Exercise 9: Create a function double that takes a number and returns it doubled.

function doubled(value){
    return value + value;
}
console.log(doubled(5));
console.log(doubled(3.5));

/* explain this to me >>> Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output

```
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
``` */

function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 + value2;
        default:
            return 0;
    }
}
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

// Exercise 11: Reverse String Create a function reverseString that reverses a string.

function reverseString(name){
    return name.split("").reverse().join("");
}
console.log(reverseString("ayomide"));

// Exercise 12: Create a function isValidPassword that returns true if password is 8+ characters.

function isValidPassword(password){
    if(password.length > 8){
        return "true";
    } else {
        return "false";
    }
}
console.log(isValidPassword("pass123"));
console.log(isValidPassword("password123"));

// Exercise 13: Create a function countItems that returns how many items are in an array.

function countItems(numbers){
    return numbers;
}
console.log(countItems([1, 2, 3]).length);
console.log(countItems([1, 2, 3, 4, 5, 6, 7, 8, 9]).length);

// Exercise 14: Create a function getLastItem that returns the last item in an array.

function getLastItem(numbers){
    lastItem = numbers[numbers.length - 1]
    return lastItem;
}
console.log(getLastItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getLastItem([1, 2, 3, 4, 5, 6]));

/*

Exercise 15: Count Array Items
Create a function countItems that returns how many items are in an array.

*/

function countItems(items){
    return items.length;
}
console.log(countItems([1,2,3,4]));


/* Exercise 16:  You have a shopping cart. Add "shoes" and "shirt" 
to the cart, then remove the last item added.
Return the final cart. */

const cart = ["hat", "pants"];

const added = cart.push("shoes", "shirt");

const updated = cart.pop();

console.log(cart);

/* Exercise 17: Given an array, keep removing the last item 
until the array has only 2 items left.
Return the final array. */

function removed(plates){
    while(plates.length > 2){
        plates.pop()
    }
    return plates;
}
console.log(removed(["p1", "p2", "p3", "p4", "p5"]));

/* Exercise 18: Push these words one by one into an empty array:
"I", "love", "coding"
Then pop the last word and return both:
- the popped word
- the remaining array */

const sentence = [];

const firstWord = sentence.push("I");

const  secondWord = sentence.push("love");

const lastWord = sentence.push("coding");

const removedString = sentence.pop()

console.log(sentence);


// Exercise 19: 

const defaults = { lang: 'en', theme: 'dark'};

const userPrefs = { lang: 'fr', currency: 'USD'};

const adminPrefs = {...defaults, ...userPrefs};

console.log(adminPrefs);

const original = { a: 1, b: 2 };

const copy = { ...original };

console.log(copy);

/* Exercise 20:
Try to solve these without looking at the solutions immediately. Use modern array methods (map, filter, reduce, flatMap) where possible.

Employee names
Create an array containing only the names of all employees.
*/

const companyData = [
  {
    department: "Engineering",
    manager: "Alice Smith",
    employees: [
      {
        id: 101,
        name: "Bob Jones",
        role: "Backend Developer",
        devices: [
          { type: "Laptop", model: "MacBook Pro", year: 2022 },
          { type: "Phone", model: "iPhone 13", year: 2021 }
        ]
      },
      {
        id: 102,
        name: "Charlie Davis",
        role: "Frontend Developer",
        devices: [
          { type: "Laptop", model: "Dell XPS", year: 2023 }
        ]
      }
    ]
  },
  {
    department: "Design",
    manager: "Diana Prince",
    employees: [
      {
        id: 103,
        name: "Eve Adams",
        role: "UX Designer",
        devices: [
          { type: "Laptop", model: "MacBook Pro", year: 2023 },
          { type: "Tablet", model: "iPad Pro", year: 2022 }
        ]
      }
    ]
  }
];

const fullNames = companyData.flatMap(dept => {
    return dept.employees.map(employee => employee.name)
}
);
console.log(fullNames);