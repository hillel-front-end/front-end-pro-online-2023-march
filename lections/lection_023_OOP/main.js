/*
 Object.prototype -> userSayHi()
 Object.prototype.constructor + instanceof
*/

// function foo() {

// }

// foo()

function Foo() {}

const foo = new Foo();

// foo = {} <-- new
// Foo();
// this == foo
// { __proto__: Foo.prototype }

// function Person(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   // return
// }
// console.log(Person.prototype, "Person.prototype");

// Person.prototype.rotate = function() {}
// const person = new Person("Valera", "Ter...");

// const person2 = new Person("Pety", "Foo...");

// console.log(person, "person");

// console.log(person2, "person2");

function HTMLElement(tagName) {
  this.tagName = tagName;

  if (tagName === "a") {
    this.href = 'https:///rogaAndKopita'
    this.redirect = function () {
      console.log(this.tagName, "redirect");
      console.log(this, "this");
    };
  } else if (tagName == "img") {
    this.showPicture = function () {
      console.log(this.tagName, "render picture");
      //   console.log(this, 'this');
    };
  }
}

HTMLElement.prototype.rotate = function () {
  console.log(this.tagName, "rotating");

  console.log(this, "this");
};

HTMLElement.prototype.render = function () {
  console.log(this.tagName, "rendering ...");
};

const tagAnchor = new HTMLElement("a");

const tagImg = new HTMLElement("img");

// console.log(tagAnchor, "tagA");
// console.log(tagImg, "tagImg");

// tagAnchor.redirect();

// tagImg.showPicture();

// tagAnchor.rotate();

// tagA.redirect.call(tagImg)

// console.log({}, "fppp");

console.log(HTMLElement.prototype, "prototype");
console.log(HTMLElement.prototype.__proto__);
//[[Prototype]] === __proto__

// const obj = new Object();
// const arr = new Array();
// const date  = new Date();

Object.prototype.sayHi = function () {
  console.log("Hello from Object.proptotype", this);
};

Array.prototype.myPush = function(elem) {
    this.push(elem + 'valera');
}

const arr = ["valera", "fofffsdf"];


arr.sayHi()
tagAnchor.sayHi();

console.log(tagAnchor.sayHi);
console.log(arr.myPush('1111'), 'arr');


console.log(arr, 'arr');


const func = function(){}

console.log(func.__proto__.__proto__ === tagAnchor.__proto__.__proto__)
console.log([].__proto__.__proto__ === tagAnchor.__proto__.__proto__)
console.log({}.__proto__ === tagAnchor.__proto__.__proto__)