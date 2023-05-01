/*

19.15 * test
19.30 * chains __proto__, hasOwnProperty vs in, Obj.create()
19.50 * assignObject , .keys, values, entries,  freeze, seal
20.15 * computed: gaccessor properties + examples
**.** * Object.defineProperty(descriptor)

*/

const modalWindow = {
  open: function () {
    console.log("open");
    console.log(this, "this");
  },
  close: function () {
    console.log("close");
  },
};

const modalWindowSignIng = {
  signIn() {
    console.log("signIn");
  },
  __proto__: modalWindow,
};

// const modalWindowSearch = {
//   search() {
//     console.log("search");
//   },
//   __proto__: modalWindow,
// };
const p1 = {
  search() {
    console.log("search");
  },
};

const p2 = Object.create(modalWindow);

const modalWindowSearch = Object.assign(p2, p1);

// console.log(p2, "p2");
// const obj3 = Object.create(modalWindow); //

// console.log(obj3, "obj3");

// modalWindowSearch.search();
// modalWindowSearch.open();
// modalWindowSearch.close()

// console.log(modalWindowSearch, "modalWindowSearch");

for (let key in modalWindowSearch) {
  if (modalWindowSearch.hasOwnProperty(key)) {
    //   console.log(key, "own key");
    continue;
  }
}

// console.log("hasOwnProperty" in modalWindowSearch, "key"); // all

// console.log(modalWindowSearch.hasOwnProperty("search")); // own keys

// ---------------------- OBJECT METHODS --------

const a = Object.assign({ j: 1 }, { k: 12 });

// const a2 = {
//   l1: 1,
//   l2: "abc",
//   l3: false,
// };

// const a2 = Object.freeze({
//   l1: 1,
//   l2: "abc",
//   l3: false,
// });

const a2 = Object.seal({
  l1: 1,
  l2: "abc",
  l3: false,
});

a2.l1 = 2;
a2.l4 = [];
delete a2.l3;

// console.log(a2, "a2");

const key = Object.keys(a2);
const values = Object.values(a2);
const entries = Object.entries(a2);

// console.log(key, "key");
// console.log(values, "values");
// console.log(entries, "entries");

// ------- accessor properties --------

// ------- computed, security write ---------
const person = {
  firstName: "Valera",
  lastName: "Ternavsky",
  //   getFullName: function () {
  //     return this.firstName + " " + this.lastName;
  //   },

  //   get  zFullName() {
  //     return this.firstName + " " + this.lastName;
  //   },

  get fullName() {
    // getter
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    if (typeof value != "string" || isNaN(value) || value.length == 0) {
      return;
    }
    // setter
    const splited = value.split(" ");
    const firstName = splited[0];
    const lastName = splited[1];

    this.firstName = firstName;
    this.lastName = lastName;
    // console.log(splited, 'sp');
  },
};
// console.log(person.fullName); // read

person.firstName = "Pety";

// console.log(person.fullName);

person.fullName = "Alex Bubukov";
person.fullName = 123123;

// console.log(person);
// console.log(person.fullName);

// ----- example - 2 ------

const rectangle = {
  left: 10,
  right: 100,
  top: 50,
  bottom: 200,

  get height() {
    return this.bottom - this.top;
  },

  get width() {
    return this.right - this.left;
  },

  get area() {
    return this.width * this.height;
  },
};

// console.log(rectangle.width, "width");
rectangle.right = rectangle.right - 20;
// console.log(rectangle.width, "width");

// console.log(rectangle.height, "height");

// console.log(rectangle.area, "area");

// ------------- Proxy --------

const database = {
  goods: [1, 2, 3, 4],
};

const store = {
  name: "Silpo",

  get goods() {
    return database.goods;
  },
};

database.goods.push(5);
database.goods.push(6);

// console.log(store.goods);

// ------------- side effect ----------

const history = {
  records: [],
  get templateRecords() {
    const template = this.records.map(
      (record) =>
        '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
    );
    return (
      '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
    );
  },
  drawRecords() {
    document.write(this.templateRecords);
  },
};

const shape = {
  dependencies: Object.seal({
    left: 100,
    right: 100,
    top: 100,
    bottom: 100,
  }),
  get perimeter() {
    //------ Bug ---

    //  ------ Your resolve problem there -----

    //  ------ Your resolve problem there -----

    // there are maybe heavy calculations
    const total = Object.values(this.dependencies).reduce(
      (accm, value) => accm + value,
      0
    );

    // side effect
    history.records.push({
      dependencies: this.dependencies,
      perimeter: total,
    });

    return total;
  },

  set perimeter(perimeter) {
    if (!Number.isInteger(perimeter) || perimeter < 400) {
      return;
    }

    const size = perimeter / 4;

    this.dependencies = Object.seal({
      left: size,
      right: size,
      top: size,
      bottom: size,
    });

    // side effect

    history.records.push({
      dependencies: this.dependencies,
      perimeter: perimeter,
    });
  },
};

// shape.dependencies.foo = NaN; // ignored because  - sealed
// delete shape.dependencies.left; // ignored because  - sealed

// shape.perimeter = 500; // write -- call setter

// console.log(shape.perimeter, "shape.perimeter"); // read -- call getter

// shape.dependencies.bottom = 200;

/// unoptimized operations
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");

// shape.dependencies.bottom = 300;

// shape.perimeter;

// draw records on screen
history.drawRecords();

// compare -- modify and current dependencies
console.log(shape.dependencies, "shape.dependencies");
console.log(
  history.records[history.records.length - 1].dependencies,
  "records"
);
