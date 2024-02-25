/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

console.log('***** Move Zero to Right *****');

function moveZeroToRight(inputArray) {

    let newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) {
            newArray.push(inputArray[i]);
        }

    }

    let numberOfZeros = numbers.length - newArray.length;
    for (let i = 0; i < numberOfZeros; i++) {
        newArray.push(0);
    }
    return newArray;

}

let numbers = [0, 6, 7, 0, 2, 3, 4, 0];

console.log(moveZeroToRight(numbers));

console.log();
console.log('******* Array Intersection *******');

function arrayIntersection(inputArray1, inputArray2) {
    let matchedValue = [];

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {

            if (num1[i] === num2[j]) {

                matchedValue.push(num1[i]);

            }
        }

    }
    let result = new Set(matchedValue);
    return Array.from(result);

}

let num1 = [4, 9, 5];
let num2 = [9, 4, 9, 8, 4];

console.log(arrayIntersection(num1, num2));

console.log();
console.log('***** Find the index of Minimum & Maximum Value *****');


function findMinMaxIndices(array) {
    let minIndex = 0;
    let maxIndex = 0;
    let maxValue = array[0], minValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {

            maxValue = array[i];
            maxIndex = i;
        }
        else if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }

    }

    return { minIndex, maxIndex, maxValue, minValue }

}

let nums = [34, 7, 21, 89, 54, 10, 91, 67, 100, 6];

let valueOfMinMax = findMinMaxIndices(nums);
console.log(`Maximum Element: ${valueOfMinMax.maxValue}, Index: ${valueOfMinMax.maxIndex}`);
console.log(`Maximum Element: ${valueOfMinMax.minValue}, Index: ${valueOfMinMax.minIndex}`);

console.log();
console.log('***** Remove Duplicates *****');
// Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
// Output: resultArray = [1, 2, 3, 4, 5, 6]

function removeDuplicates(array) {
    let arrayWithoutDuplicates = new Set(array);
    return Array.from(arrayWithoutDuplicates);
}
let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 6];
console.log(removeDuplicates(arrayWithDuplicates));

console.log();
console.log('***** Find the Number of occurances');

function findOccurances(array) {
    let occurances = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === k) {
            occurances += 1;
        }
    }
    return occurances;
}

const values = [2, 4, 5, 2, 1, 2, 5];
const k = 5
console.log(findOccurances(values));


console.log();
console.log('***** Find the indices of sum value *****');

const numberrs = [2, 4, 7, 8, 11, 14];
const target = 18;
for (let i = 0; i < numberrs.length; i++) {
    for (let j = 1; j < numberrs.length; j++) {

        let sum = numberrs[i] + numberrs[j];

        if (sum === target) {

            console.log(`sum of the values in the indicies ${i} and ${j} is ${target}`);

        }

    }

}


