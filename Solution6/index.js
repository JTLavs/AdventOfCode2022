const fs = require('fs');
let inputFile = fs.readFileSync('input.txt', 'utf-8');
let startingChar = 0;

function getMarker (distinctCount) {
    let noOfChars = 0;

    while(startingChar + distinctCount <= inputFile.length) {
        const marker = inputFile.substring(startingChar, startingChar + distinctCount).split('');
        let uniq = [];
        marker.forEach(el => {
    
            if (!uniq.includes(el)) {
                uniq.push(el);
            }
        });
    
        if(uniq.length === distinctCount) {
            noOfChars = inputFile.search(marker.join('')) + distinctCount;
            break;
        }
    
        startingChar ++;
    }

    return noOfChars;
}

console.log(getMarker(4));
console.log(getMarker(14));
