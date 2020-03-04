
# FizzBuzz

This is a super popular coding challenge — the one question I couldn’t possibly leave out. Here’s how you can state the problem.

console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5

fizzBuzz(5)
Result:

## Reasoning about the challenge

One important point about FizzBuzz relates to how you can find multiples of a number in JavaScript. You do this using the modulo or remainder operator, which looks like this: %. This operator returns the remainder after a division between two numbers. A remainder of 0 indicates that the first number is a multiple of the second number:

12 % 5 // 2 -> 12 is not a multiple of 5
12 % 3 // 0 -> 12 is multiple of 3
If you divide 12 by 5, the result is 2 with a remainder of 2. If you divide 12 by 3, the result is 4 with a remainder of 0. In the first example, 12 is not a multiple of 5, while in the second example, 12 is a multiple of 3.

With this information, cracking FizzBuzz is a matter of using the appropriate conditional logic that will lead to printing the expected output.

Solution
Here’s one solution you can try out for the FizzBuzz challenge:

````
const fizzBuzz = num => {
  for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
      else if(i % 3 === 0) {
      console.log('fizz')
      else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}
````