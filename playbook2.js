// Exercise 10: Create a function isValidPassword that returns true if password is 8+ characters.

function isValidPassword(password){
    if(password.length > 8){
        return "true";
    } else {
        return "false";
    }
}
console.log(isValidPassword("pass123"));
console.log(isValidPassword("password123"));

// Exercise 11: Create a function countItems that returns how many items are in an array.

function countItems(numbers){
    return numbers;
}
console.log(countItems([1, 2, 3]).length);
console.log(countItems([1, 2, 3, 4, 5, 6, 7, 8, 9]).length);

// Exercise 12: Create a function getLastItem that returns the last item in an array.

function getLastItem(numbers){
    lastItem = numbers[numbers.length - 1]
    return lastItem;
}
console.log(getLastItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getLastItem([1, 2, 3, 4, 5, 6]));

// Exercise 14: Create a function findMax that returns the largest number in an array.

/* function findMax(numbers){
   if(numbers > numbers){
    return Math.max(
        numbers
    )
   }
}
console.log(findMax([1, 5, 3, 9, 2])); */

// Exercise 15: Reverse String Create a function reverseString that reverses a string.

function reverseString(name){
    return name.split("").reverse().join("");
}
console.log(reverseString("ayomide"));
