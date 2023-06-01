Object.prototype.sayHi = function () {
  console.log("Hello!");
};

function HTMLElement(tagName, className, id) {
  // field
  this.tagName = tagName;
  this.className = className;
  this.id = id;
}

HTMLElement.prototype.rotate = function () {
  console.log("rotating from HTMLElement", this.tagName);
};

HTMLElement.prototype.render = function () {
  console.log("rendering ...");
};

const mySuper = (parent, context, arg) => parent.apply(context, arg);

function HTMLAnchor(href, ...arg) {
  mySuper(HTMLElement, this, arg);
  this.href = href;
}

console.dir(HTMLAnchor, "HTMLAnchor");
console.dir(HTMLElement, "HTMLElement");

// HTMLAnchor.prototype = {
//     ...HTMLAnchor.prototype,
//     __proto__: HTMLElement.prototype
// }

HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;

// const prototype = Object.create(HTMLElement.prototype);
// prototype.constructor = HTMLAnchor;

// HTMLAnchor.prototype = prototype;

HTMLAnchor.prototype.redirect = function () {
  console.log(this.href, "is redirecting");
};

/// ------Поліморфізм
HTMLAnchor.prototype.rotate = function () {
  console.log("rotating from HTMLAnchor", this.tagName);
};

const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");
const a2 = new HTMLAnchor("https://copita", "anchor", "link", "facebook-link");

// console.log(a1, "a1");
// console.log(a2, "a2");

// a1.render();
// a1.sayHi();
a2.rotate(); // call

// ----- HTMLImg ------

HTMLImg.prototype.__proto__ = HTMLElement.prototype;

HTMLImg.prototype.showPicture = function () {
  console.log("showing picture", this.tagName);
};

function HTMLImg(src, flag, ...arg) {
  mySuper(HTMLElement, this, arg);
  this.id = this.id || "picture";
  this.src = src;

  if (flag) {
    /// ------Поліморфізм
    this.rotate = function () {
      console.log("My rotate from instance", this.tagName);
    };
  }
}

const img1 = new HTMLImg("http://some-picture", true, "IMG", "some-picture");

const img2 = new HTMLImg("http://some-picture", false, "IMG", "some-picture");
console.log(img1, "img");

img1.rotate();

// ---------- singleton -----------------
//https://bretcameron.medium.com/singletons-in-javascript-59655927b7d7

function Foo(a1, b1) {
  if (!Foo.instance) {
    this.a1 = a1;
    this.b1 = b1;

    Foo.instance = this;
  } else {
    return Foo.instance;
  }
}

function Foo2(a1, b1) {
  this.a1 = a1;
  this.b1 = b1;
}

// console.log(new Foo(1, 2))
// console.log(new Foo())
// console.log(new Foo())

// ----------- instanceof ---------

const foo = new Foo(1, 2);
const foo2 = new Foo2(1, 2);

function toDo(obj) {
  console.dir(Foo, "Foo");

  if (obj instanceof Foo) {
    console.log("This is instance from Foo contructor");
  } else if (obj instanceof Foo2) {
    console.log("This is instance from Foo2 contructor");
  } else if (obj instanceof HTMLAnchor) {
    console.log("This is instance from HTMLAnchor contructor");
  }

  if (obj instanceof Object) {
    console.log("This is instance from Object contructor");
  }
}

toDo(new HTMLAnchor());
// toDo(new Foo2(1, 2))
toDo();

// --------------  Інкапсуляція ------------------

// private, protected, public

function HTMLCanvas(c1, c2) {
  // private c3 = 12;
  //private privateFunc = function() {}

  let _c3 = 12 // private
  const _privateFunc = function() {}

  this.c1 = c1; // public
  this.c2 = c2;

  // safety access to private field
  Object.defineProperty(this, 'c3', {
    get() {
      return _c3;
    },
    set(v) {
    if (v && typeof v === 'number' && v > 0 && v < 30) {
      _c3 = v;
    }
    }
  })


}

const canvas = new HTMLCanvas(1, 2);
console.log(canvas, "canvas");

canvas.c1 = 12;

console.log(canvas, "canvas");

// canvas.privateFunc()

console.log(canvas.c3)

canvas.c3 = 14;
canvas.c3 = 'asdasd';
console.log(canvas, 'canvas');
