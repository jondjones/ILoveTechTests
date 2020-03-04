
# Find The Vowels

You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.

The vowels are “a”, “e”, “i”, “o”, “u”.

Examples:

findVowels('hello') // --> 2
findVowels('why') // --> 0

const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matches.length : 0
}