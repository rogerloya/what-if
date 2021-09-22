const prompt = require('prompt-sync')();

const weight = Number(prompt('What is your weight? '));

const planet = Number(prompt("Please enter a planet number: "));

if (planet === 1) {
    console.log(weight * 0.78);
    
}

if (planet === 2) {
    console.log(weight * 0.39);
    
}

if (planet === 3) {
    console.log(weight * 2.65);
    
}

if (planet === 4) {
    console.log(weight * 1.17);
    
}

if (planet === 5) {
    console.log(weight * 1.05);
    
}

if (planet === 6) {
    console.log(weight * 1.23);
    
}
