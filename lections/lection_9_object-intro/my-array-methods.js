// -----------------------------------------

// forEach, map, filter, reduce, reduceRight

const arr3 = ["a", "b", "c"];

// arr3.forEach(() => );

function myForEach(cb, array) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

// Array.prototype.myForEach = myForEach;
// arr3.myForEach = myForEach;

const myCallback = (itemValue, index, array) => {
  console.log(itemValue);
};

// arr3.forEach(myCallback);
// arr3.myForEach(myCallback, array);

// console.log(arr3, "arr3");

// const anotherArray = ["aaaaa", 1111, [], false];

// anotherArray.myForEach(function (item) {
//   console.log(item, "item");
// }, array);

function myMap(cb, array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

const mapedArr = myMap(function (item) {
  return item + 1000;
}, arr3);

// arr3.map(function (item) {
//   return item + 1000;
// });
// console.log(arr3, "arr3");
// console.log(mapedArr, "mapedArr");

// function myFilter(cb, array) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (cb(array[i], i, array)) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// }

const arr5 = [100, 200, 300];

// let j = myFilter((item) => item > 150, arr5);

// console.log(j, "j");

// j = arr5.filter((item) => item > 150);

// console.log(j, "j");

// cb(array[i], i, array)

// arr5.reduce((sum, item, index, array) => {
//   return 1;
// }, 0);

// function myReduce(cb, accum, array) {
//   for (let i = 0; i < array.length; i++) {
//     accum = cb(accum, array[i], i);
//   }
//   return accum;
// }

// function myReduceRight(cb, accum, array) {
//   for (let i = 0; i < array.reverse().length; i++) {
//     accum = cb(accum, array[i], i);
//   }
//   return accum;
// }

// const total = myReduce(
//   (previous, item, index) => {
//     return previous + item;
//   },
//   0,
//   arr5
// );

// const total2 = arr5.reduce((previous, item, index) => {
//   return previous + item;
// }, 0);

// const total4 = arr5
//   .map((item) => item * 10)
//   .filter((item) => item > 1500)
//   .reduce((previous, item, index) => {
//     return previous + item;
//   }, 0);

// console.log(total4, "t4");
