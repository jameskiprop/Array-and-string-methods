/*20 string methods*/
var stringOne = "freecodecamp is the best place to learn";
var stringTwo = "frontend and backend development";

//charAt() - returns the character at index 1 of a string.
console.log(stringOne.charAt(1));

//charCodeAt()- returns the Unicode value of the character at index 1 in a string.
console.log(stringOne.charCodeAt(1));

//concat() combines two or more arrays  into a new array without mutating the original arrays .
console.log(stringOne.concat(stringTwo));

//endswith - checks whether a string ends with a specified strig or character
console.log(stringOne.endsWith("learn"));

//fromCharCode - gives you the numeric code for a character in a string at a specific position.
console.log(String.fromCharCode(114));

//includes - checks if a string or array contains a specified value and returns true if it does, and false otherwise.
console.log(stringTwo.includes("end"));

//indexOf() -returns the position of the first found occurrence of a specified value in a string
console.log(stringTwo.indexOf("end"));

//lastIndexOf() - returns the position of the last found occurrence of a specified value in a string
console.log(stringTwo.lastIndexOf("end"));

//match - searches a string for a match against a certain expression
console.log(stringTwo.match(/end/g));

//repeat - returns a new string with a specified number of copies of an existing string
console.log(stringOne.repeat(3));

//replace -searches a string for a specified value /expression and returns a new string where the specified values are
console.log(stringTwo.replace(/end/g, "END"));

//search - find the position of the first occurrence of a specified expression in a string and returns the index of the match or -1 if no match is found.
console.log(stringTwo.search("end"));

//slice() - extracts a part of a string and returns a new string
console.log(stringTwo.slice(2, 4));

//split() - In JavaScript, the `split` method divides a string into an array of substrings based on a specified delimiter.
console.log(stringOne.split(" "));

//startsWith() In JavaScript, the `startsWith` method checks if a string begins with a specified substring, returning `true` if it does and `false` otherwise.
console.log(stringOne.startsWith("free"));

//substr() - extracts a character from a string beginnign from a specified string
console.log(stringTwo.substr(2, 4));

//substring - extracts the characters of a string between two specified indexes
console.log(stringTwo.substring(2, 4));

//toLowerCase - The `toLowerCase` method in JavaScript converts all characters in a string to lowercase.
console.log(stringOne.toLowerCase());

//toUpperCase - The `toUpperCase` method in JavaScript converts all the characters in a string to uppercase.
console.log(stringOne.toUpperCase());

//trim() - removes extra space from a string
var stringThree = "        Subscribe Now!";
console.log(stringThree.trim());
