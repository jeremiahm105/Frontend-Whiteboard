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

console.log("-----------------------------")

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

console.log("-----------------------------")



//TODO: Palindrome Check: Write a function to determine if a given string is a palindrome -- Example radar

function isPalindrome(str) {
    let reversed = str.toLowerCase().split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("radar"));

console.log("-----------------------------")


// Write a program that prints the numbers from 1-100. For multiples of three print Fizz, for multiples of 5 print Buzz for multiples of 3 and 5 print FizzBuzz **Complete using a switch statement

for (let j = 1; j <= 15; j++) {
    switch(true) {
        case j % 3 === 0 && j % 5 === 0:
            console.log("Fizzer-Buzzer")
            break;
        case j % 3 === 0:
            console.log("Fizzer")
            break;
        case j % 5 === 0:
            console.log("Buzzer")
            break;
        default:
            console.log(j)
    }
}

console.log("-----------------------------")



// Define a function named that converts converts hours to seconds that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, fucntion should return, false.

// function convertHourToSec(hours) {
// 	if (typeof hours !== "number" && (typeof hours !== "string" || !parseInt(hours))) {
// 		return false;
// 	}
// 	let numberInHours = parseInt(hours);
// 	if (isNaN(numberInHours) || numberInHours < 0) {
// 		return false;
// 	} else {
// 		return numberInHours * 3600
// 	}
// }

// console.log("-----------------------------")


// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

// function getLowestNumber(input1, input2, input3){
// 	let num1 = parseInt(input1);
// 	let num2 = parseInt(input2);
// 	let num3 = parseInt(input3);
// 	if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
// 		return false;
// 	} else {
// 		return Math.min(input1, input2, input3);
// 	}
// }

// console.log("-----------------------------")


// Write a function that accepts an array of numbers and returns aan array with all the numbers except 4.

// function removes4(arr) {
//     let removeNum = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 4) {
//             removeNum.push(arr[i]);
//         }
//     }
//     return removeNum;
// }

// console.log("-----------------------------")
