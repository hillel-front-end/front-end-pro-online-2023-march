// # - 1 Functions intro. DRY and Separation concept (small chunks, Single Responsibility, Kiss)

// # - 2 Declaration, expression, arrow  & diff

// alert()

/*

function() {

}

*/

// expression
// const toDo = function () {};

// arrow
// const toDo = () => {};

// declaration
// function toDo() {

// }
// console.dir(toDo, "toDO");

// # - 3 Input/Output, arguments

// describe function
function toDo(a, b, c) {
  // if (!b) {
  //   return;
  // }

  console.log("work -- !!");

  a = a || "default value";
  // console.log(a, b, c, "a, b, c");
  a = a || "default value";
  let i = 0;

  i += 100;

  // console.log(a, "a");
  // console.log("Work toDo", i);

  // return i + a;
  // return a + i;
  // return a, b; Bad

  // return;// --> undefined

  // return [i, a];

  // console.log("after return");
}

// let a1 = toDo("first");

// console.log(a1, "a1");

// const name = "valera";
// toDo("hello world", 1, false, []);
// toDo("hello world", 1, false);

// let foo = prompt();
// console.log(foo, "foo");

// let a1 = toDo('Hello world');

// alert("Hello world");

function sum(a, b, c) {
  // console.log(arguments.push(1), "arg"); // Error
  // console.log(a, b, c, "a, b, c");

  // p = [1, 2];

  // function = 2;

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i], "arguments[i]");
    sum += arguments[i];
  }

  // console.log(arguments, "arg");
  // console.log(p, "p");
  return sum;
}

let result = sum(1, 2, 6, 1);

// console.log(result, "result");

// # - 3 Example arrayFiller(..)

// # - 4 Intro local scope

// # - 5 Imperative and declarative (exmp: searching min, max)

// # - 6 Example decomposition and composition

// #  ---------------------- 4  --------------------------

// outside scope
// let c1 = "outside";

// let c3 = "outside - c3";
// let c3 = "local - c3;

// function mul() {
//   //local scope
//   let c2 = "local";

//   c3 = "local - c3"; // global

//   console.log(c1, "c1 local");
//   console.log(c3, "c3 local ");
// }

// debugger;
// console.log(c3, "c3 outside before call mull");

// mul();
// console.log(c1, "c1 outside");
// console.log(c2, "c2 outside");
// console.log(c3, "c3 outside after call mull");

// ------------------- # 3 , 5, 6 ------------------------

// alert();

function arrayFilleTwoDem(array, countRows, countCols) {
  for (let i = 0; i < countRows; i++) {
    array[i] = new Array();

    for (let j = 0; j < countCols; j++) {
      array[i][j] = Math.floor(Math.random() * 10);
    }
  }

  return array;
}

function sumArrayItems(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// function findIndexMinAndMaxRow(array) {
//   let minItem = array[0];
//   let minItemIndex = 0;

//   let maxItem = array[0];
//   let maxItemIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (minItem >= array[i]) {
//       minItem = array[i];
//       minItemIndex = i;
//     }

//     if (array[i] >= maxItem) {
//       maxItem = array[i];
//       maxItemIndex = i;
//     }
//   }

//   console.log(maxItemIndex, minItemIndex);

//   return [minItemIndex, maxItemIndex];
// }

// function findMinIndexOfArray(array) {
//   let minItem = array[0];
//   let minItemIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (minItem >= array[i]) {
//       minItem = array[i];
//       minItemIndex = i;
//     }
//   }

//   return minItemIndex;
// }

// function findMaxIndexOfArray(array) {
//   let maxItem = array[0];
//   let maxItemIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= maxItem) {
//       maxItem = array[i];
//       maxItemIndex = i;
//     }
//   }

//   return maxItemIndex;
// }

function findIndexByExpresson(array, expressionCb) {
  let item = array[0];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (expressionCb(array[i], item)) {
      // max currentItem = array[i], item = item
      item = array[i];
      index = i;
    }
  }

  return index;
}

const expression_min = function (currentItem, item) {
  return currentItem < item; // bool
};

const expression_max = function (currentItem, item) {
  return currentItem > item; // bool
};

function swapMinMaxRow(array) {
  const sums = [];

  for (let i = 0; i < array.length; i++) {
    // const sum = sumArrayItems(array[i]);
    // sums.push(sum);
    sums.push(sumArrayItems(array[i]));
  }

  // step --- 1
  // const indexes = findIndexMinAndMaxRow(sums);
  // const min = indexes[0];
  // const max = indexes[1];

  // step --- 2
  // const minIndex = findMinIndexOfArray(sums);
  // const maxIndex = findMaxIndexOfArray(sums);

  //step --- 3
  // const minIndex = findIndexByExpresson(sums, expression_min);
  // const maxIndex = findIndexByExpresson(sums, expression_max);

  // const maxIndex = findIndexByExpresson(
  //   sums,
  //   (currentItem, item) => urrentItem > item
  // );

  console.log(minIndex, "minIndex");
  console.log(maxIndex, "maxIndex");
  console.log(sums, "sums");
}

const array = arrayFilleTwoDem([], 5, 5);

swapMinMaxRow(array);

// console.log(mass, "mass");

// console.log(mass, "mass");
// # lesson - 7 - 6 callback, Nested function, return function
