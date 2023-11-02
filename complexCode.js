/*
Filename: complexCode.js
Content: Complex Code Example
*/

// Constants
const NUMBER_OF_ITERATIONS = 1000;
const MAXIMUM_VALUE = 100;

// Function to get a random number between 0 and max
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's age in dog years
  getAgeInDogYears() {
    return this.age * 7;
  }
}

// Array of people
let people = [
  new Person("John", 25),
  new Person("Emma", 30),
  new Person("Tom", 40),
  new Person("Lisa", 35)
];

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Generate an array of random numbers
let numbers = [];
for (let i = 0; i < NUMBER_OF_ITERATIONS; i++) {
  numbers.push(getRandomNumber(MAXIMUM_VALUE));
}

// Calculate the sum of the array of numbers
let sum = calculateSum(numbers);

// Calculate the factorial of the sum
let factorialOfSum = factorial(sum);

// Output the results
console.log("Sum of random numbers:", sum);
console.log("Factorial of sum:", factorialOfSum);
console.log();

// Sorting the array of people by age
people.sort((a, b) => a.age - b.age);

// Output the sorted array of people
console.log("Sorted array of people by age:");
for (let i = 0; i < people.length; i++) {
  console.log("Name:", people[i].name, "- Age:", people[i].age);
}

// Create a new person
let newPerson = new Person("Kate", 27);

// Output the age of the new person in dog years
console.log("Age of new person in dog years:", newPerson.getAgeInDogYears());
console.log();

// Complex nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      console.log("i:", i, "- j:", j, "- k:", k);
    }
  }
}

// Complex conditional statements
let x = getRandomNumber(MAXIMUM_VALUE);
let y = getRandomNumber(MAXIMUM_VALUE);
let z = getRandomNumber(MAXIMUM_VALUE);

if (x > y && y < z) {
  console.log("x is greater than y and y is less than z");
} else if (x < y || x < z) {
  console.log("x is less than y or z");
} else {
  console.log("x is neither greater than y nor less than z");
}

// Complex switch statement
let dayOfWeek = getRandomNumber(7);
let dayName;

switch (dayOfWeek) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Day of the week:", dayOfWeek, "- Name:", dayName);

// Complex array operations
let filteredNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Filtered numbers (even):", filteredNumbers);

let mappedNumbers = filteredNumbers.map((number) => number * 2);
console.log("Mapped numbers (doubled):", mappedNumbers);

let reducedSum = mappedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced sum of mapped numbers:", reducedSum);

// Complex regular expression matching
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = "example@example.com";

if (email.match(emailRegex)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

// Complex asynchronous function using Promises
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async function completed");
    }, 2000);
  });
}

async function runAsyncFunction() {
  console.log("Running async function...");
  let result = await asyncFunction();
  console.log(result);
}

runAsyncFunction();

// ... More complex code can follow ...
// Remember to add more meaningful comments to explain the code structure and logic.