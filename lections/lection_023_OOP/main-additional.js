Object.prototype.sayHi = function () {
  console.log("Hello!");
};

function HTMLElement(tagName, className, id) {
  this.tagName = tagName;
  this.className = className;
  this.id = id;
}

HTMLElement.prototype.rotate = function () {
  console.log("rotating");
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

const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");
const a2 = new HTMLAnchor("https://copita", "anchor", "link", "facebook-link");

console.log(a1, "a1");
console.log(a2, "a2");

a1.render();
a2.rotate();

a1.sayHi();
