
const fs = require('fs');

const {wordCount, longestWord, lineCount} = require("C:/College Things/Rize_Application Development/Week 3/Assignment-2/src/textAnalyzer.js");

const sample = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/sample-text.txt', 'utf8');
const quotes = fs.readFileSync('C:/College Things/Rize_Application Development/Week 3/Assignment-2/data/quotes.txt', 'utf8');

test( 'counts total number of words', () => {
    expect(wordCount(sample)).toBe(207);
});

test( 'displays longest word', () => {
    expect(longestWord(sample)).toBe("infrastructure");
});

test( 'displays number of lines', () => {
    expect(lineCount(quotes)).toBe(10);
});