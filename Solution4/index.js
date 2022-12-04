const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
let array = inputFile.split(/\r?\n/);

let occurancesPart1 = 0;
let occurancesPart2 = 0;

array = array.map((el) => el.split(','));

function convertToArray (range) {
    const minVal = Number(range.split('-')[0]);
    const maxValue = Number(range.split('-')[1]);

    return [...Array(maxValue - (minVal  - 1)).keys()].map(i => i + minVal);   
}

array.forEach(range => {
    const firstRange = convertToArray(range[0]);
    const secondRange = convertToArray(range[1]);

    const isFirstInSecond = firstRange.every(el => secondRange.includes(el));
    const isSecondInFirst = secondRange.every(el => firstRange.includes(el));

    if (isFirstInSecond || isSecondInFirst) {
        occurancesPart1 ++;
    }

    if (firstRange.some(el => secondRange.includes(el))) {
        occurancesPart2++
    }
});

console.log(occurancesPart1);
console.log(occurancesPart2);





