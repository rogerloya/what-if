const prompt = require('prompt-sync')();

const age = Number(prompt('Please enter your age: '));

if (age < 16) {
    console.log("You can't drive.");
} else if (age < 18) {
    console.log("You can drive but not vote.");
} else if (age < 25) {
    console.log("You can vote but no rent a car.");
} else {
    console.log("You can pretty much do anything.");
}