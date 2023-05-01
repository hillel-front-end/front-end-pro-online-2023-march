// descriptors
/* 
    Object.defineProperty(obj, prop, descriptor)
        obj - Объект, в котором будум настраивать свойство.
        prop - имя настраемого свойства
        descriptor - объект настройки свойства.

    descriptor: {
        value: значение свойства. по умолчанию undefined,
        writable: значение свойства можно менять, если true. По умолчанию false,
        configurable: если true, то свойство можно удалят/менять его в
                       дальнейшем при помощи новых вызовов defineProperty.
                       По умолчанию false,
        enumerable: если true, то свойство просматривается 
                    в цикле for..in и методе Object.keys(). По умолчанию false.,
        get – функция, которая возвращает значение свойства. По умолчанию undefined
        set – функция, которая записывает значение свойства. По умолчанию undefined.
    }


    Запрещено использовать:
    * одновременно get/set и value
    * указывать writable при наличии get/set-функций.
*/

// console.log([], { foo: 1 });

const obj = {
  name: "123",
  lastName: "bbbb",
  //   get fullName() {

  //   },
  //   set fullName(v) {

  //   }
};

obj.foo = 1;

const descriptor = {
  configurable: false,
  enumerable: false,
};

// data - descriptor

const data = { // const
  value: 12, /// default
  writeble: false,
};

// acccess - descriptor (getter, setter)

const acccess = {
  get() {
    // getter
    return 18;
  },

  set(value) {
    // setter
  },
};

Object.defineProperty(obj, "age", Object.assign(descriptor, data));

// Object.defineProperty(obj, "age", {});

// delete obj.age;
obj.age = 18;

// Object.defineProperty(obj, "age", {});

console.log(obj, "obj");

for (let key in obj) {
  console.log(key, "key");
}
