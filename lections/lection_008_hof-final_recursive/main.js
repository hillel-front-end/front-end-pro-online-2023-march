//-------------------

function factoryEmploerInfo(type) {
  switch (type) {
    case "fullTime": {
      return () => "Full time employee with rate 30$";
    }

    case "parttime": {
      return () => "Parttime employee with rate 30$";
    }

    case "temporary": {
      return () => "Temporary employee with rate 30$";
    }
  }
}

const getFullTimeInfo = factoryEmploerInfo("fullTime");

// ------------- recursive ---------------

// function recursive() {
//   recursive();
// }

// recursive();

// let sum = 0;

// for (let i = 0; i < 2; i++) {
//   sum += i;
// }

// console.log(sum, "sum");
// 2 + 1 + 0 ==> 3

function calculeteSum(n) {
  if (n === 0) {
    // !n
    return n;
  }

  console.log(n, "n before");
  const result = n + calculeteSum(n - 1);
  console.log(n, "n after");
  return result;
}

// let a = calculeteSum(5);

// console.log(a, "a");

// ---------------------------------

// const array = [
//   [2.1, 2.2, 2.3],

//   [2.1, 2.2, 2.3, [3.1, 3.2, 3.3]],
// ];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (Array.isArray(array[i][j])) {
//       console.log("It`s array", array[i][j]);

//       for (let k = 0; k < array[i][j].length; k++) {
//         console.log(array[i][j][k]);
//       }
//     } else {
//       console.log("It isn`t array", array[i][j]);
//     }
//   }
// }

const array = [
  [2.1, 2.2, 2.3, [3.1, 3.2, 3.3], 2.4, 2.5],

  [2.1, 2.2, 2.3, [3.1, 3.2, 3.3, [4.1, 4.2, 4.3]]],
];

function recursiveLoop(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      recursiveLoop(array[i]);
    } else {
      console.log("It isn`t array", array[i]);
    }
  }
}

// recursiveLoop(array);

// const arr_2 = new Array(
//   new Array(5),
//   new Array(new Array(6), new Array(6), new Array(new Array(6), new Array(6))),
//   new Array(6)
// );

const arr_2 = new Array(
  new Array(5),
  new Array(new Array(6), new Array(6)),
  new Array(6)
);
// console.log(arr_2, "arr_2");
const random = (min, max) => Math.round(Math.random() * (max - min) + min);

function deepArrayFiller(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      deepArrayFiller(array[i]);
    } else {
      array[i] = random(0, 10);
    }
  }

  return array;
}

const filledArray = deepArrayFiller(arr_2);

console.log(filledArray, "filledArray");
