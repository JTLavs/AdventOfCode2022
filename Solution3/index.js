const { kMaxLength } = require('buffer');
const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
const array = inputFile.split(/\r?\n/);

const characters = [...'abcdefghijklmnopqrstuvwxyz', ...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
let totalOfCommonItems = 0;

// PART 1
array.forEach(el => {
    const duplicateLetters = [];
    const firstItem = el.substring(0, el.length / 2);
    const secondItem = el.substring(el.length / 2, el.length);

    firstItem.split("").forEach(char => {
        const hasCharacter = secondItem.includes(char);
        const correctedIndex = characters.indexOf(char) + 1;

        if (hasCharacter && !duplicateLetters.includes(char)) {
            totalOfCommonItems += correctedIndex;

            // Push so it doesn't count the same letter if it appears again
            duplicateLetters.push(char);
        }
    })
});

console.log(totalOfCommonItems);

// PART 2
totalOfCommonItems = 0;

// Split into arrays of 3 items
const groups = [];
while (array.length > 0) {
    groups.push(array.splice(0,3));
}

groups.forEach(item => {
    const duplicateLetters = [];
 
    item[0].split("").forEach(char => {
        const inAllGroups = item[1].includes(char) && item[2].includes(char);
        const correctedIndex = characters.indexOf(char) + 1;

        if (inAllGroups && !duplicateLetters.includes(char)) {
            // Push so it doesn't count the same letter if it appears again
            duplicateLetters.push(char);
            totalOfCommonItems += correctedIndex;
        }
    });
});

console.log(totalOfCommonItems);

