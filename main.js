"use strict";
//       🚀 Day 17 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//Question 49: 
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.
//Defines a function that accepts a list of hobbies as arguments
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}
// Calls function four hobbies
logHobbies("reading", "coding", "cycling", "traveling");
//Question 50
//Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. 
//Include at least three different activities.
// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Morning Tranquility and Productivity.
2. Afternoon Exploration and Creativity.
3. Evening Relaxation and Connection.`;
// Logging the multiline string to the console
console.log(myIdealDay);
//Question 51
//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//Defines a function that calculates the area of a rectangle
function calculateArea(length, width) {
    // Calculates the area of a rectangle
    return length * width;
}
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Logs the area of a rectangle to the console  
console.log(calculateAreaArrow(4, 5));
