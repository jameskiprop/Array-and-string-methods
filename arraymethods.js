// // 1; //toString()
// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

// let stringNames = names.toString();
// console.log(stringNames);

// // 2; //join

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

// let stringNames = names.join(" and ");
// console.log(stringNames);

// // 3; //concat -combine arrays together

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];
// let names2 = ["John", "Tom"];
// let names3 = ["Delilah", "Smith"];

// let joined = names.concat(names2, names3);
// console.log(joined);

// // 4; //splice - removing some elements from the array and you can also add new elements

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];
// let namesCopy = [...names];

// namesCopy.splice(1, 2, "wanjiru", "Akinyi");
// console.log(namesCopy);

// // 5; //slice - to slice out elements of an array

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

// let slice = names.slice(1, 3);
// console.log(slice);
// console.log(names);

// // 6; // index of - finds the position of an individual element in the array

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku", "Tracy"];

// let index = names.indexOf("Tracy");
// console.log(index);

// // 7; //lastIndexOf

// let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku", "Tracy"];

// let index = names.lastIndexOf("Tracy");
// console.log(index);

// // 8; //flat
// let nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9];

// let flat = nums.flat();
// console.log(flat);

// // 9; //forEach -Executes a provided function once for each array element without returning a value.
// let names = ["Danny", "Joe", "Tracy1", "Wendy", "Wanjiku", "Tracy"];

// for (let i = 1; i < names.length; i += 2) {
//   console.log(names[i]);
// }

// //10 map - Makes a new array by changing each item in an array.

// let nums = [1, 2, 3, 4, 5, 6];

// let quadrupled = nums.map((n) => n * 4);
// console.log(quadrupled);

// // 11 Filter - Makes a new array with only the items that pass a test.
// let posts = [
//   { title: "post 1", author: "Jamie" },
//   { title: "post 2", author: "Quincy" },
//   { title: "post 3", author: "Sasha" },
//   { title: "post 4", author: "Troy" },
// ];

// let QuincysPost = posts.filter((p) => p.author === "Sarah");
// console.log(QuincysPost);

// //12 reduce - Combines all items in an array into a single value.
// let nums = [1, 2, 3, 4, 5, 6, 7];

// let total = nums.reduce((total, currentVal) => total + currentVal);
// let max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(max);

// //13.some - Checks if at least one item in an array passes a test.
// let nums = [1, 2, 3, 4, 5, 6, 7];

// let isGreaterThan5 = nums.some((n) => n > 7);
// console.log(isGreaterThan5);

// //14 .every() - Checks if all items in an array pass a test.
// let nums = [1, 2, 3, 0, 5, 6, 7];

// let allGreaterThan0 = nums.every((n) => n > 0);

// console.log(allGreaterThan0);

// //15 find - Finds the first item in an array that passes a test.
// let stock = [
//   { item: "ketchup", quantity: 32 },
//   { item: "mayo", quantity: 9 },
//   { item: "not sauce", quantity: 12 },
// ];

// let ketchup = stock.find((s) => s.item === "ketchup");
// console.log(ketchup.quantity);

// //16 Sort Arranges items in an array in order.
// let names = ["Sasha", "Denis", "Troy", "Sarah"];

// let alph = names.sort();
// console.log(alph);

const student = {
  firstName: "John",
  lastname: "Quincy",
  age: 24,
};

function studentGeneration(student) {
  if (student.age <= 13) {
    console.log("Gen Alpha");
  } else if (student.age <= 27) {
    console.log("gen z");
  } else if (student.age >= 28) {
    console.log("Millenial");
  } else student.age >= 38;
  {
    console.log("Boomer");
  }
}
studentGeneration(student);
