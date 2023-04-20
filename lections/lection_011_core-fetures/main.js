/*
 
 1. Hoisting (local, global)
 2. Lexical Environment
 3. Scope
 4. Closure
 5. Bind + Problems solution

*/

// myFuc()// window  || undefined
// object.myFunc() // this === > object
// call  --> myFuc.call(object, arg1, ... , agn) // object.myFuc()
// apply --> myFuc.call(object, [arg1, ... , argn])

// -------------------------   ---------------------------------

// local scope --> function
// global scope --> window

// global scope

// var a = 12;

// function myFunction() {
//   // local scope myFunction

//   function myFunction2() {
//     // local scope myFunction2
//     console.log(a);
//   }
// }

// ------------- Hoisting (local, global) -----------------
// global = undefined;
// toMyExpresFunc = undefined;
// function a1() {}

// toMyExpresFunc();
// console.log(toMyExpresFunc, "toMyExpresFunc");
// console.log(global, "global");
// console.log(a1, "a1");

var total = 12;
var toMyExpresFunc = function () {};

a1();

function a1() {}

a1();

// dead zone

// console.log(arrow, "arrow");
const arrow = undefined;

// arrow = 12;
// console.log(arrow, "expresFun");
let expresFun;

// console.log(expresFun, "expresFun");

//--------------------- Object Lexical Environment (LE)  -----------------------

var h = "global h";
// let globalVar = "Global";

// window = { a1: function() { }}

function k1(arg1) {
  /* hoisting: LE.K1 = { 
    h: undefined, 
    arg1: undefined, 
    expression: undefined,
    declaration: function() {}, 
  };
  */
  //   const j = "local j";
  //   let u = "local u";

  var h = "local h";

  // LE = { h: 'local h', arg1: 1 };

  //   console.log(h, "h"); // LE.h

  function declaration() {}

  var expression = () => {};

  //   console.log(j, "j");
  //   globalVar = "local";

  // declaration, hoisting local ???

  //  LE = null;
}

k1(1);

// console.log(globalVar, "globalVar");

// --------- SCOPE --------------

let o = "global";

function p1() {
  let o = "local p1";

  // LE.p1 = { o: local p1 , p2: func, scope: window}

  //p1.[SCOPE]: window

  function p2() {
    o = "local p2";
    // LE.p2 = { scope: LE.p1 }
    // console.log(o, "o from p2");
  }

  p2();

  // LE.p1 = { o: "local p2" , p2: func, scope: window}

  console.log(o, "after call p2");
}

p1();

console.log(o, "after call p1");

// function next() {
//   let o = "Local next value";

//   p1();
// }

// next();
// ---------------------------

// 1 - 15
// 2 - 1

let u = 1;

function t1() {
  // L1.t1 = { scope: window }
  console.log(u);
}

function l1(callback) {
  // callback = t1
  // LE.l1 = { u: 2, callback: func, scope: window}
  let u = 2;

  callback();
}

l1(t1);


// -------------------------------------------------