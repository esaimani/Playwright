/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

function printLengthOfLastWord(senetence) {

    let words = senetence.trim().split(' ');
    let lastWord = words[words.length - 1];
    return 'The last word is "' + lastWord + '" with length ' + lastWord.length;

}

let senetence = '   fly me   to   the moon  ';

console.log(printLengthOfLastWord(senetence));

function isAnagram(str1, str2) {

    let sortedString1 = str1.split('').sort().join();
    let sortedString2 = str2.split('').sort().join();
    if (sortedString1 === sortedString2) {
        return true;
    }
    else {
        return false;
    }

}

console.log(isAnagram('listen', 'silents'));


let word = 'malayalam';
console.log(isPolindrome(word));

function isPolindrome(word) {

    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {

        reversedWord += word[i];

    }

    if (word === reversedWord) {
        return word + ' is Polindrome'
    }
    else {
        return word + ' is not a Polindrome'
    }
}
