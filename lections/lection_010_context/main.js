/*

**.**   context intro, problems (prev lesson exmp)
**.**   context: function, method
**.**   use strict(undefined) and window
**.**   arrow + this, nesten in function
**.**   call apply + method borrowing

*/

/*
 1. call function this === window; (expression, declaration)
 2. call function  with 'use strict'  ==> this == undefined (expression, declaration)
 3. call function like method ==> object.func() ==> this == object (expression, declaration)
 4. arrow haven`t this
 5. call function with call(object), apply(object) => func.call(object) this == object, obj1.call(obj2) this == obj2

*/

//  ------- arguments  SOLID -------------

// Dity ---
// let a = 10;

// function foo() {
//   a = 12;
// }

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 1); // 2

// sum(1, 1); // 2

// ----------------- CONTEXT -- this ------------------

// function getFullName(obj) {
//   return obj.lastName + " " + obj.name;
// }
// console.log(alert);
// console.log(confirm);
// console.log(window.innerWidth);
// "use strict";

var lastName = "Global LastName";
var name = "Global Name";
let sureName = "foo"; // global

// function getFullName() {
//   console.log(this, "this");
//   //   var foo = 12; // local
//   //   foo = 12; global var
//   //   return person.lastName + " " + person.name;
//   return this.lastName + " " + this.name;
// }

const person = {
  name: "Valera",
  lastName: "Ternavsky",
  getFullName: getFullName,
};

const personSecond = {
  name: "Pety",
  lastName: "Pupkin",
  getFullName: getFullName,

  anotherTodo: function () {
    // console.log(this, "this");
    const arrow = () => {
      console.log(this, "this borrowed from anotherTodo function");
    };

    arrow();
  },

  toDo: () => {
    console.log(this, "this"); // window
  },
};

// let fullName = getFullName(); //window

// fullName = person.getFullName(); // person
// console.log(fullName, "fullName");

// fullName = personSecond.getFullName(); //personSecond
// console.log(fullName, "fullName");

// personSecond.anotherTodo();
// personSecond.toDo(); // this is arrow without this (this === window)
// -----------

function myFilter(cb) {
  const newArray = [];
  console.log(this, "this");
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

// [1, 2, 3].filter((item) => item );

// let arr = [1, 2, 3];
// let arr2 = ["aaa", "bb", "cc"];

// arr.myFilter = myFilter;
// arr2.myFilter = myFilter;

// arr.myFilter((item) => item > 0);

// arr2.myFilter((item) => item > 0);

// ------------------ call apply -----------------------------------------

function getFullName(arg1, arg2) {
  console.log(arguments, "arguments");

  //   console.log(this, "this");
  return this.lastName + arg1 + this.name;
}

const person3 = {
  name: "Valera",
  lastName: "Ternavsky",
  //   getFullName: getFullName,

  foo: function () {
    console.log(this);
  },
};

const obj = {
  a: 11111,
};

// ------------ problem -------------------
// fullName = person3.getFullName();
// delete person3.getFullName;

// console.log(person3, "person3");

// --------------- solution ----------------

/* 
  function.call(context, arg1, arg2, arg3, ... , argn) 
  function.apply(context, [arg1, arg2, arg3, ... , argn])  
*/

fullName = getFullName.call(person3, "arg1", "arg2");
fullName = getFullName.apply(person3, arr3);

person3.foo.call(obj);

// console.log(person3, "person3");

// console.log(fullName, "fullName");

// ------------------ borrowing -----------

function foo() {
  //   console.log(arguments, "arg");

  const arr = [];
  const slice = arr.slice;
  //   const arrFromArg = slice.call(arguments);

  //   const arrFromArg = [].slice.call(arguments, 1);

  //   console.log(arrFromArg, "arrFromArg");

  //   arguments.slice = slice;

  //   console.log(arguments.slice(), "arguments");
  //   console.log(arrFromArg, "arrFromArg");
}

foo(1, 2, 3, "Hello world");

// ------------- bind ---------------
