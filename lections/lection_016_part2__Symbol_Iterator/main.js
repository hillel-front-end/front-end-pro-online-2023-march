/// ------------------ Symbol --------

const foo = Symbol("id");
const foo2 = Symbol("id");

console.log(foo2, "foo2");
console.log(typeof foo, "foo");
console.log(foo, "foo");

console.log(foo === foo2);

const product = {
  id: 12,
  title: "Fooo",
  price: "12.50",
  [foo]: "some value",
  [foo2]: "some value 2",
};

console.log(product);
console.log(product["Symbol(id)"], "symbol - 1");

console.log(product[foo], "symbol - 1");
console.log(product[foo2], "symbol - 2");

for (let key in product) {
  console.log(key, "key");
}

const copyProduct = Object.assign({}, product);

console.log(copyProduct, "copyProduct");

// ---------------------------

arr = ["aaa", "vvv", "cc"];

// console.log(arr.entries(), 'iterator')

const iterator = arr.entries();

// console.log(iterator, 'iterator');
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

let obj;

while (!(obj = iterator.next()).done) {
  //   console.log(obj.value, "value");
}

// for (let key in arr) {
//   console.log(key, arr[key]);
// }

const iterable = {
  a1: "aaa",
  a2: "bbb",
  a3: "ccc",
  a4: "ggg",
  a5: "kkk",
};

iterable[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  const self = this;
  //   console.log(keys, "keys");
  // console.log(this, "this");
  return {
    finish: keys.length,
    current: 0,
    next() {
      if (this.current < this.finish) {
        const key = keys[this.current++];
        // console.log(key, "key");
        // console.log(self, "self");
        // console.log(this, "this");
        return { done: false, value: self[key] };
      }

      return { done: true, value: undefined };
    },
  };
};

for (let key in iterable) {
  //   console.log(iterable[key], "key");
}

// const iterator2 = iterable[Symbol.iterator]();

// console.log(iterator2, "iterator2");

// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

// console.log(iterable, "iterable");
// for (let value of iterable) {
//   console.log(value);
// }

// console.log(Symbol.iterator, "iterator");

// console.log(arr, "arr");
// console.log(iterable, "itera");

/// -------------------

const obj2 = {
  [Symbol.iterator]: function () {
    let step = 0;

    return {
      next() {
        step++;

        if (step === 1) {
          return { value: String(step), done: false };
        } else if (step == 2) {
          return { value: String(step), done: false };
        }

        return { done: true, value: undefined };
      },
    };
  },
};

// for (let value2 of obj2) {
//   console.log(value2, "value2");
// }

// const iterator3 = obj2[Symbol.iterator]();

// console.log(iterator3.next(), "iterator3");
// console.log(iterator3.next(), "iterator3");
// console.log(iterator3.next(), "iterator3");

// ------- Generator intro -------

function* getNumber() {
  console.log(1);
  yield 10;

  console.log(2);
  yield 20;

  console.log(3);
  yield 30;
}

const itertor4 = getNumber(); // function - generator

console.log(itertor4.next(), "itertor4");

for (let i = 0, sum = 0; i < 1000; i++) {}

setTimeout(() => {
  console.log(itertor4.next(), "itertor4");
}, 5000);

// console.log(itertor4.next(), "itertor4");

// console.log(itertor4.next(), "itertor4");

// console.log(itertor4.next(), "itertor4");


