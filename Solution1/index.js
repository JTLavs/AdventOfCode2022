const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');

const array = inputFile.split(/\r?\n/);
const elfTotals = [];
let elfTotal = 0;

// Part 1
array.forEach(el => {
    elfTotal += Number(el);

    if (el === '') {
        // Push the previous total and reset
        elfTotals.push(total);
        elfTotal = 0;
    }
});

// Sort into descending order and output
console.log(elfTotals.sort((a,b) => b - a));

// Part 2
const topThreeTotal = elfTotals.slice(0,3).reduce((acc, val) => {
    return acc += val;
}, 0);

console.log(topThreeTotal);