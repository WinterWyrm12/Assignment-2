const fs = require('fs');

/* Sum */
function sum(x){
    let sum = 0;
    for(let num of x){
        sum += num;
    } 
    return sum;
}

/* Highest */
function highest(x){
    return Math.max(...x);
}

/* Lowest */
function lowest(x){
    return Math.min(...x);
}

/* Average */
function average(x){
    return sum(x)/x.length;
}

const numberstext = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/sample-numbers.txt', 'utf8');
const numbers = numberstext
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(Number);

/* Test
console.log('sum of all numbers: ', sum(numbers));
console.log('highest number: ', highest(numbers));
console.log('lowest number: ', lowest(numbers));
console.log('average: ', average(numbers)); */

module.exports = {
    sum,
    highest,
    lowest,
    average
};
