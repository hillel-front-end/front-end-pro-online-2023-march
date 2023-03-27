/*
  Задача. Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
       Если число равно нуля, то игнорируем его.
   *   В массиве A найти min - значение, и max - значение. Min - max поменять местами.
*/


let arr = new Array(30);

const min = -5, max = 5;
const A = [];
const B = [];

for(let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  arr[i] = Math.round(Math.random() * (max - min) + min);

  if (arr[i] > 0) {
    A[A.length] = arr[i];
  }

  if (arr[i] < 0) {
    B[B.length] = arr[i];
  }

}


// console.log(B, 'B');
let minItem = A[0];
let minItemIndex = 0;

let maxItem = A[0];
let maxItemIndex = 0;

for(let j = 1; j < A.length; j++) {
  if (minItem >= A[j]) {
    minItem = A[j];
    minItemIndex = j;
  }

  if (A[j] >= maxItem) {
    maxItem = A[j];
    maxItemIndex = j;
  }
}

console.log(minItem, 'minItem');
console.log(minItemIndex, 'minItemIndex');


console.log(maxItem, 'maxItem');
console.log(maxItemIndex, 'maxItemIndex');

debugger;
console.log(A, 'arrA');


// -----------------------------------
temp = A[minItemIndex];
A[minItemIndex] = A[maxItemIndex];
A[maxItemIndex] = temp;

console.log(A, 'arrA');
//========= splice, shift, unshift, join, split ------ at home