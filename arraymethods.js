// 1; //toString()
/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

let stringNames = names.toString();
console.log(stringNames);*/

// 2; //join

/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

let stringNames = names.join(" and ");
console.log(stringNames); */

// 3; //concat -combine arrays together

/* let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];
let names2 = ["John", "Tom"];
let names3 = ["Delilah", "Smith"];

let joined = names.concat(names2, names3);
console.log(joined); */

// 4; //splice - removing some elements from the array and you can also add new elements

/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];
let namesCopy = [...names];

namesCopy.splice(1, 2, "wanjiru", "Akinyi");
console.log(namesCopy);*/

// 5; //slice - to slice out elements of an array

/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku"];

let slice = names.slice(1, 3);
console.log(slice);
console.log(names);*/

// 6; // index of

/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku", "Tracy"];

let index = names.indexOf("Tracy");
console.log(index);
*/

// 7; //lastIndexOf

/*let names = ["Danny", "Joe", "Tracy", "Wendy", "Wanjiku", "Tracy"];

let index = names.lastIndexOf("Tracy");
console.log(index); */

// 8; //flat
/*let nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9];

let flat = nums.flat();
console.log(flat);*/

// 9; //forEach
/*let names = ["Danny", "Joe", "Tracy1", "Wendy", "Wanjiku", "Tracy"];

for (let i = 1; i < names.length; i += 2) {
  console.log(names[i]);
} */

//10 map

/*let nums = [1, 2, 3, 4, 5, 6];

let quadrupled = nums.map((n) => n * 4);
console.log(quadrupled);*/

// 11 Filter
/*let posts = [
  { title: "post 1", author: "Jamie" },
  { title: "post 2", author: "Quincy" },
  { title: "post 3", author: "Sasha" },
  { title: "post 4", author: "Troy" },
];

let QuincysPost = posts.filter((p) => p.author === "Sarah");
console.log(QuincysPost);*/

//12 reduce
/*let nums = [1, 2, 3, 4, 5, 6, 7];

let total = nums.reduce((total, currentVal) => total + currentVal);
let max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);*/

//13.some
/*let nums = [1, 2, 3, 4, 5, 6, 7];

let isGreaterThan5 = nums.some((n) => n > 7);
console.log(isGreaterThan5);*/

//14 .every()
let nums = [1, 2, 3, 0, 5, 6, 7];

let allGreaterThan0 = nums.every((n) => n > 0);

console.log(allGreaterThan0);
//15 find
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "not sauce", quantity: 12 },
];

let ketchup = stock.find((s) => s.item === "ketchup");
console.log(ketchup.quantity);

//16 Sort
let names = ["Sasha", "Denis", "Troy", "Sarah"];

let alph = names.sort();
console.log(alph);
