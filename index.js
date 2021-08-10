// bring in the exported stats object
// let stats = require("./easy-stats.js");
let StatsManager = require("./StatsManager.js")
let stats = new StatsManager();

// create an array that we want to get statistics for
let numbers = [62, 65, 88, 60, 53, 34, 31, 37];

// use the min function that is a member of the stats object
let minNum = stats.min(numbers);

// display the result
console.log("Minimum number: " + minNum);

console.log("Sum of numbers:", stats.sumOfValues(numbers))
console.log("Max Number:", stats.max(numbers))
console.log("Average Number:", stats.mean(numbers))