const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter a number: "))

if (num1 % 3 === 0 && num1% 5 ===0) {
    console.log("fizzbuzz");
}

else if (num1 % 3 === 0) {
    console.log("fizz");
}

else if (num1 % 5 === 0) {
    console.log('buzz')
}
