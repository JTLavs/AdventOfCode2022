const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
const array = inputFile.split(/\r?\n/);

let pointsPart1 = 0;
let pointsPart2 = 0;

let choices = {
    rock: {
        points: 1,
        beats: 'sissors',
        beatenBy: 'paper',
        yourLetter: 'X',
        theirLetter: 'A'
    },
    paper: {
        points: 2,
        beats: 'rock',
        beatenBy: 'sissors',
        yourLetter: 'Y',
        theirLetter: 'B'
    },
    sissors: {
        points: 3,
        beats: 'paper',
        beatenBy: 'rock',
        yourLetter: 'Z',
        theirLetter: 'C'
    }
}

// Part 1
array.forEach((el) => {
    const decision = el.split(" ")[1];
    const theirChoice = el.split(" ")[0];

    Object.keys(choices).forEach(key => {
        const { yourLetter, points, theirLetter, beats } = choices[key];

        if (yourLetter === decision) {
            pointsPart1 += points;

            if (choices[beats].theirLetter === theirChoice) {
                pointsPart1 += 6;
                return;
            }

            if (theirLetter === theirChoice && yourLetter === decision) {
                pointsPart1 += 3;
                return;
            }
        }
    });
});

console.log(pointsPart1)


// Part 2
array.forEach((el) => {
    const decision = el.split(" ")[1];
    const theirChoice = el.split(" ")[0];

    Object.keys(choices).forEach(key => {
        const { points, theirLetter, beatenBy, beats } = choices[key];

        if (theirLetter === theirChoice) {
            if (decision === 'Z') {
                pointsPart2 += choices[beatenBy].points;
                pointsPart2 += 6;
                return;
            }

            if (decision === 'Y') {
                pointsPart2 += points;
                pointsPart2 += 3;
                return;
            }

            pointsPart2 += choices[beats].points;
        }
    });
});

console.log(pointsPart2);
