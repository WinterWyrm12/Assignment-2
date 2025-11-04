
const fs = require('fs');

const {sum, highest, lowest, average} = require("C:/College Things/Rize_Application Development/Week 3/Assignment-2/src/numberProcessor.js");

const numberstext = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/sample-numbers.txt', 'utf8');
const numbers = numberstext
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(Number);

test( 'finds sum of all numbers', () => {
    expect(sum(numbers)).toBe(2597);
});

test( 'highest number', () => {
    expect(highest(numbers)).toBe(96);
});

test( 'lowest number', () => {
    expect(lowest(numbers)).toBe(73);
});

test( 'average number', () => {
    expect(average(numbers)).toBe(86.56666666666666);
});