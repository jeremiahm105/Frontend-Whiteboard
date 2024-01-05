"use strict"

//TODO:Reverse a String: example hello
function reverseString (str) {
    let strArray = str.split(" ");
    let reversedArray = strArray.reverse();
    let reversedString = reversedArray.join(" ");
    return reversedString;
}
reverseString("hello")
console.log(reverseString("hello"));

//TODO: Write a program that prints the numbers from 1-100. For multiples of three print Fizz, for multiples of 5 print Buzz for multiples of 3 and 5 print FizzBuzz.

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//TODO: Palindrome Check: Write a function to determine if a given string is a palindrome -- Example radar

function isPalindrome(str) {
    let reversed = str.toLowerCase().split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("radar"));