# Javascript Katas

### Lonely Number

Given an array of numbers, one numner will appear once and the others will be duplicated.  Write a method to return this item  

Example
```javascript
lonelyNumber([1, 2, 2, 3, 3, 4, 4])
// 1

lonelyNumber([5, 5, 6, 8, 8, 7, 7])
// 5
```

### Two Sum

Given a goal number and an array of numbers.  Find the two numbers that when they added together equal the goal and eturn their indices 
Example
```javascript
const goal = 10;
const arr = [1, 3, 5, 7, 8];
function twoSum(arr, goal) {
    // add code
    return
}

twoSum(arr, goal)
// 13 
```
​
### Remove The Duplicates

Given an array, return just the unique elements without using any built-in Array filtering. 

```javascript
let arr = [1, 2, 2, 3, 4, 5, 6, 6]
function uniques(arr) {
  // fill in
}

uniques(arr);
// [1, 3, 4, 5]
```

### Dutch National Flag Problem

The flag of the Netherlands consists of three colors: red, white and blue.  Each colour represents a number.  Give an array of number arranged randomly, return an array that arranged by the same numbers in the correct order.

```javascript
const array = [2, 0, 1, 0, 2]
dutchFlagSort(arr)
// [0, 0, 1, 2, 2]
```

### Maximum Subarray

Given an array of numbers and a sum return, return true if there is a contiguous subarray.  In plain talk, return retun if 2 or more items in the array can be added together to equal the sum.  

```javascript
const arr = [1, 2, 3];
const sum = 5
subarraySum(arr, sum)
// true

const arr = [3, 6, 12, 35];
const sum = 47; 
subarraySum(arr, sum)
// true

const arr = [5, 6, 7];
const sum = 9
subarraySum(arr, sum)
// true
```

---
[:arrow_left: BACK](../README.md)