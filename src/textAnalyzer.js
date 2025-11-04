const fs = require('fs');

/* Word Count */
function wordCount(text){
    // use regex to find words
    const words = text.match(/[A-Za-z0-9']+/g);
    return words.length;
}

/* Longest Word */
function longestWord(text){
    const words = text.match(/[A-Za-z0-9']+/g);
    let longest = words[0];
    for(let i of words){
        if(i.length > longest.length){
            longest = i;
        }
    }
    return longest;
}

/* Line Count */
function lineCount(text){
    let count = text.split('\n').length;
    return count;
}

/* Test */
const sample = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/sample-text.txt', 'utf8');
const quotes = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/quotes.txt', 'utf8');



module.exports = {
    wordCount,
    longestWord,
    lineCount
};