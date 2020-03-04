
# Palindrome

A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

Understanding the challenge
The problem can be stated along the following lines: given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome. For example:

palindrome('racecar')  ===  true
palindrome('table')  ===  false]

## Reasoning about the challenge

This challenge revolves around the idea of reversing a string. If the reversed string is the same as the original input string, then you have a palindrome and your function should return true. Conversely, if the reversed string isn’t the same as the original input string, the latter is not a palindrome and your function is expected to return false.

Solution
Here’s one way you can solve the palindrome challenge:

const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')
}