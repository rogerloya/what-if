const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter class size: '));

if (groupSize % 3 === 0) {
    console.log(groupSize/3, 'groups of threes');
}

else if (groupSize % 3 === 1) {
    const groupOf3 = (groupSize-4)/3;
    const groupOf2 = 2;
    console.log(groupOf3, 'groups of three, ', groupOf2, 'groups of two');
}

else if (groupSize % 3 === 2) {
    const groupOf3 = (groupSize-2)/3;
    const groupOf2 = 1;
    console.log(groupOf3, 'groups of three, ', groupOf2, 'groups of two');
}