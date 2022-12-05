const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
let stacks = [
    'zvtbjgr'.split(''),
    'lvrj'.split(''), 
    'fqs'.split(''),
    'gqvflnhz'.split(''),
    'wmscjtqr'.split(''),
    'fhctws'.split(''),
    'jnfvczd'.split(''),
    'qfrwdzgl'.split(''),
    'pvwbj'.split(''),
];

let array = inputFile.split(/\r?\n/);

//Remove words from the instructions we only care about the numbers
array = array.map(el => el.split(' ').filter(char => !isNaN(char)));


// Part 1
array.forEach(el => {
    const source = el[1] - 1;
    const destination = el[2] - 1;
    let noToMove = el[0];

    while (noToMove > 0) {
        const createToMove = stacks[source].shift();
        stacks[destination].unshift(createToMove);
        noToMove --;
    }   
});
console.log(stacks);

// Part 2

stacks = [
    'zvtbjgr'.split(''),
    'lvrj'.split(''), 
    'fqs'.split(''),
    'gqvflnhz'.split(''),
    'wmscjtqr'.split(''),
    'fhctws'.split(''),
    'jnfvczd'.split(''),
    'qfrwdzgl'.split(''),
    'pvwbj'.split(''),
];

array.forEach(el => {
    const source = el[1] - 1;
    const destination = el[2] - 1;
    let noToMove = el[0];
    const cratesToMove = [];

    while (noToMove > 0) {
        const crateToMove = stacks[source].shift();
        cratesToMove.push(crateToMove);
        noToMove --;
    }   

    stacks[destination] = [...cratesToMove, ...stacks[destination]];
});

console.log(stacks);