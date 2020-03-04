
# Anagram

Aword is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

Understanding the challenge
You can state this challenge in the following terms: write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:


```
anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false
```


## Reasoning about the challenge

The first thing to notice is that you’ll need to compare each letter in the two input strings, not only in terms of which letters they are but also how many of each letter there are in both strings. 

A way of mapping this information would look something like this:

finder --> f: 1        friend --> f: 1
           i: 1                   r: 1
           n: 1                   i: 1
           d: 1                   e: 1
           e: 1                   n: 1
           r: 1                   d: 1

A suitable data structure to hold the anagram data would be a JavaScript object literal: 

the key is the letter character and the value is the number of times that letter is contained in the given string.

Next, pay attention to these edge cases:

make sure letter casing isn’t factored into the comparison; 
just transform both strings into either lower case or upper case

leave everything that isn’t a character out of the comparison; 
a good option would be to use a regular expression.


## Solution

Here’s how you could approach the Anagram challenge:

// helper function that builds the
// object to store the data
const buildCharObject = str => {
  const charObj = {}
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    // if the object has already a key value pair
    // equal to the value being looped over,
    // increase the value by 1, otherwise add
    // the letter being looped over as key and 1 as its value
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}

// main function
const anagram = (strA, strB) => {
  // build the object that holds strA data
  const aCharObject = buildCharObject(strA)
  // build the object that holds strB data
  const bCharObject = buildCharObject(strB)

  // compare number of keys in the two objects
  // (anagrams must have the same number of letters)
  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false
  }
  // if both objects have the same number of keys
  // we can be sure that at least both strings
  // have the same number of characters
  // Now we can compare the two objects to see if both
  // have the same letters in the same amount
  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false
    }
  }
  // if both the above checks succeed,
  // you have an anagram: return true
  return true
}
Notice the use of Object.keys() in the snippet above. This method returns an array containing a given object’s property names or keys in the same order as they appear in the object. In this case, the array would look like this:

['f', 'i', 'n', 'd', 'r']
This is a handy way of getting an object’s properties without performing a cumbersome loop. In this challenge, you can use it together with the .length property to check if both strings have the same number of characters, which is an important feature of anagrams.