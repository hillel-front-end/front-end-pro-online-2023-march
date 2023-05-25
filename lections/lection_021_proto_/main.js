// this | scope | LE | closure | hoisting
// var b = 12;

// function foo(){
//     // le = { scope: foo.[[SCOPE]]}
//     g = 12
//     var a = 12;
//     console.log(b)
//     // foo.[[SCOPE]] = window
// }

// function foo2() {
//  var b = 3;
//     foo();
// }

// foo2()

// ------------------

// foo(); // this ==> window, use strict - undefined
// obj.foo(); // this ==> obj
// arrow ==> scope
// foo = foo.bind(obj) --> foo() --> this == obj
// call(context, ar1, ..., argN) -- apply(context, [arg1, ... , argN])

// -------------------- OOP ---------------------------

// __proto__ && prototype

const b = {
  toDo() {
    console.log("1111");
  },
};

const a = {
  __proto__: b,
};

a.toDo();

// ------------------ function - constructor --------------

//
// function Player() {
//   this.name = "Valera";
//   this.run = function() {}
// }

// const player = new Player();

/*
  1. h = create "new" object  -> {} (*)
  2. function constructor Player()
  3. this ==> ( пункт - 1) new object
  4. in (*) add property player.__proto___ = Player.prototype
*/

// console.dir(Player, "Player");
// console.log(Player.prototype, "Player.prototype");

// console.log(player.__proto__ === Player.prototype, 'player.__proto__');
// console.log([].__proto__ === Array.prototype, '[].__proto___')

// console.log(h.__proto__)

// ------------------------
// console.dir(Array, "Array");
// console.log(Array.prototype, "Array.prototype");

// delete Array.prototype.forEach;

// console.log(["a", "b", "c"].forEach((h) => console.log(h)));

const arr = new Array(5);
const arr2 = [];
arr2.length = 3;

// console.log(arr.forEach());
// arr2.forEach();
// console.log(Player.prototype, "Player.prototype");

// console.log(h, "h");

// -------------

function HTMLElement(tagName) {
  this.tagName = tagName;

  if (tagName === "a") {
    this.redirect = function () {
      console.log(this.tagName, "redirect");
      console.log(this, 'this');
    };
  } else if (tagName == "img") {
    this.renderPicture = function () {
      console.log(this.tagName, "render picture");
    //   console.log(this, 'this');
    };
  }
}

HTMLElement.prototype.rotate = function(){
    console.log(this.tagName, 'rotating');

    console.log(this, 'this');
};

HTMLElement.prototype.render = function(){
    console.log(this.tagName, 'rendering ...');
};

const tagA = new HTMLElement("a");

const tagImg = new HTMLElement("img");

console.log(tagA, "tagA");
console.log(tagImg, "tagImg");


tagA.redirect();

tagImg.renderPicture()

tagA.rotate();


// tagA.redirect.call(tagImg)