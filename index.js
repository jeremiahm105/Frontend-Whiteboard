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

// Write a program that prints the numbers from 1-100. For multiples of three print Fizz, for multiples of 5 print Buzz for multiples of 3 and 5 print FizzBuzz **Complete using a switch statement

for (let k = 1; k <50; k++) {
    switch(true) {
        case k % 3 ===0 && k % 5 === 0:
            console.log("FizzBuzz")
            break;
        case k % 3 === 0:
            console.log("Fizz")
            break;
        case k % 5 === 0:
            console.log("Buzz")
            break;
        default:
            console.log("k")
    }
}

// Define a function named that converts converts hours to seconds that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, fucntion should return, false.

function convertHourToSec(hours) {
	if (typeof hours !== "number" && (typeof hours !== "string" || !parseInt(hours))) {
		return false;
	}
	let numberInHours = parseInt(hours);
	if (isNaN(numberInHours) || numberInHours < 0) {
		return false;
	} else {
		return numberInHours * 3600
	}
}

// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(input1, input2, input3){
	let num1 = parseInt(input1);
	let num2 = parseInt(input2);
	let num3 = parseInt(input3);
	if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
		return false;
	} else {
		return Math.min(input1, input2, input3);
	}
}

