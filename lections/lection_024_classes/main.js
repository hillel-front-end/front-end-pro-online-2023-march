//   function HTMLElement(tagName, className, id) {
//     // field
//     this.tagName = tagName;
//     this.className = className;
//     this.id = id;
//   }

//   HTMLElement.prototype.rotate = function () {
//     console.log("rotating from HTMLElement", this.tagName);
//   };

//   HTMLElement.prototype.render = function () {
//     console.log("rendering ...");
//   };

//   const mySuper = (parent, context, arg) => parent.apply(context, arg);

//   function HTMLAnchor(href, ...arg) {
//     mySuper(HTMLElement, this, ...arg);
//     this.href = href;
//   }

//   HTMLAnchor.prototype.__proto__ = HTMLElement.prototype;

/// ------Поліморфізм
// HTMLAnchor.prototype.rotate = function () {
//     console.log("rotating from HTMLAnchor", this.tagName);
//   };

//   HTMLAnchor.prototype.redirect = function () {
//     console.log(this.href, "is redirecting");
//   };

//   const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");

//------- classes ------

class HTMLElement {
  foo = 12; // this.foo = 12
  // rotate = function() { // intstance method
  //     console.log(this, 'this instance`s method'); this === instance in arrow
  // }

  //override rotate from prototype
  //   rotate = () => {
  //     console.log(this, "this from arrow");
  //   };

  constructor(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
    // this.foo = foo

    // this.rotate = () => {
    //     console.log(this, 'this');
    // }
  }

  rotate() {
    console.log("rotating from HTMLElement", this.tagName);
  }

  render() {
    console.log("rendering from HTMLElement", this.tagName);
  }
}

//   const html = new HTMLElement(1, 2, 3);
//   const html2 = new HTMLElement(1, 2, 3);

//   console.log(html, 'html');
//   console.log(html2, 'html2');

//   html.rotate();

//  ----- class ChildClass extends ParentClass {} ---

// function C1() {

// }

// C1.prototype.a1 = () => {}

class HTMLAnchor extends HTMLElement {
  href = "";

  #c3 = 25; // private c3 = 25

  constructor(href, ...arg) {
    super(...arg); // < --- must have call parent constructor
    this.href = href;
  }

  // ---- computed ---
  get hrefWithoutProtocol() {
    return this.href.slice(9); // https:://
  }

  set hrefWithoutProtocol(v) {
    if (true) {
      this.href = v;
    }
  }

  // --- access to private --
  // security read
  get c3() {
    return this.#c3;
  }

  // security set
  set c3(v) {
    // s
    if (true) {
      this.#c3 = v;
    }
  }

  redirect() {
    console.log("redirecting...", this.tageName);
  }

  // polymorphism

  rotate() {
    console.log("Prepareing rotate from HTMLAnchor", this.tagName);

    // super.rotate(); // HTMLElement.prototype.rotate()
  }
}

const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");
console.log(a1.hrefWithoutProtocol, "a1");

a1.rotate();

// console.log(a1.#c3); // read
// a1.#c3 = 15; //write

// console.log(a1.c3);
a1.c3 = 25;

// console.log(a1, '')
