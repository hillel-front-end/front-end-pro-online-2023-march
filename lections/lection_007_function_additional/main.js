// # - 1 diff between declaration, expressions, arrow
// # - 2 function - IIFE (  isolation scope between files )
// # - 3 HOF - callback, return function
//  # - 3.1 doFunction(16, -23, mul|div)
//  # - 3.2 array methods
// # - 4 recursive

// expression("after");

const expression = function () {
  console.log("expression");
};

expression("after");

// declaration("before");

function declaration(foo) {
  console.log(arguments);
  console.log("declaration", foo);
}

// declaration("after");

// arrow();

// const arrow = () => {
//   //   console.log(arguments, "arg"); Error
//   console.log("arrow", arg);
// };

// const compare = (item, item_2) => item > item_2;
// let result = compare(1, 2);

const arrow = (item) => item > 5;
let result = arrow(1);
console.log(result, "result");

// -------------------------------------------

// (function () {
//   let a = 12;
//   console.log("Call IIFE");
// })();

// if (false) {
//   (function () {
//     var p = 12;
//   })();
// }

// console.log(p, "p");

// ----------------------- HOF -------------

// function callMe(callback) {
//   console.log(callback(), "callback");
// }

// callMe(function () {
//   console.log("Hello i`am callback");

//   return true;
// });

function doFunction(a, b, actionCb) {
  console.log(actionCb, "actionCb");
  return actionCb(a, b);
}

const mul = (a, b) => a * b;
const div = function (a, b) {
  return a / b;
};

// let result2 = doFunction(1, 2, (a, b) => a * b);

let result2 = doFunction(1, 2, mul);
console.log(result2, "result2");

result2 = doFunction(1, 2, div);
console.log(result2, "result2");

// -------------------- decorator ---------------

// function sumOfArray(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   return total;
// }

// function sumPlusTen(array, sumOfArrayCb) {
//   return sumOfArrayCb(array) + 10;
// }

// let total = sumOfArray([1, 2, 3, 5]);
// console.log(total, "total");

// total = sumPlusTen([1, 2, 3, 5], sumOfArray);
// console.log(total, "total sumPlusTen");

// ----------------------------------------------------

const logger = (message) => {
  console.log(message);
};

const loggerWarning = (message) => {
  console.warn(message);
};

const loggerError = (message) => {
  console.error(message);
};
// function loggerDecorator(loggerCb, message) {
//   loggerCb(message);
//   console.log("message logged at", new Date().toLocaleString());
// }

// loggerDecorator(logger, "Click on button sign in");

// loggerDecorator(logger, "Another message");

function loggerDecorator(loggerCb) {
  return function (message) {
    loggerCb(message);
    console.log("message logged at", new Date().toLocaleString());
  };
}

const successLoger = loggerDecorator(logger);
const errorLoger = loggerDecorator(loggerError);

successLoger("Click on button");
successLoger("Loading list products");
successLoger("Another actions");

errorLoger("Error -- !!!!");
errorLoger("Error -- !!!!");
errorLoger("Error -- !!!!");
// const decoratedLoggerError = loggerDecorator(loggerError)

//-------------------------

function outerFunction() {
  const a = 12;

  const innerFunction = function () {
    console.log("nested function");
  };

  //   let bool = false;

  return innerFunction;
}

let func = outerFunction();

// console.log(func, "func");

// func();

// ----------------------------
