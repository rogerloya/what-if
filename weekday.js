const prompt = require('prompt-sync')();

const nmbr = Number(prompt('Please enter a number: '));

if (nmbr === 1) {
    console.log("That number goes with Mon");
} else if (nmbr === 2) {
    console.log("That number goes with Tue");
} else if (nmbr === 3) {
    console.log("That number goes with Wed");
} else if (nmbr === 4) {
    console.log("That number goes with Thu");
} else if (nmbr === 5) {
    console.log("That number goes with Fri");
} else if (nmbr === 6) {
    console.log("That number goes with Sat");
} else if (nmbr === 7) {
    console.log("That number goes with Sun");
} else {
    console.log("Error: Select a number from 1-7.")
}