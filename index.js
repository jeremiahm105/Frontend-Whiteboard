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

