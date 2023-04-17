/*
Lection 3 - Array
 * Math
 * [], [].length
 * new Array()
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор (for - for - of)
 * 
 * Практика:
  - min, max (10 - 20),
*/


// console.log(null == 0);
// console.log(null != undefined);
// console.log(null !== undefined);
// console.log(null == '');

// console.log(null == null);
// console.log(undefined == undefined);

// console.log(null == undefined);
// console.log(null === undefined);

// null ==> 0
// '' => 0

// true/false  ==> 1/0

// 'asd', undefined => NaN

// ==> isNaN()

// undefined, '', null, 0,  NaN


// ------------ # 1 - infinity loop + break --------------

// console.log(123);

// for(; ;) {
//   const isNext = confirm('Is Next ?');

//   if (!isNext) {
//     break;
//   }

//   // console.log(i, 'i');
// }

console.log('finish');


// while(true) {
//   break;
// }


// ------------ # 2 Math -----------------


/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

// console.log(Math.round(1.5), 'round');
// console.log(Math.round(1.4), 'round');
// console.log(Math.floor(2.9), 'floor');
// console.log(Math.ceil(5.2), 'ceil');

// let random = Math.random();
// console.log(random, 'random');

// random *= 10;

// console.log(random , 'random -- 2');

// random = Math.round(random)

// console.log(random, 'random');

// console.log(Math.random() * 10);

// const max = 20;
// const min = 10;

// random = Math.random() * (max - min) + min;

// console.log(random, 'random');

// random = Math.ceil(random);

// console.log(random, 'random');


// ----------------- Array ---------------------------



// let mobiles = 'apple, samsung, lg, nokia';

const phones = ['apple', 'samsung', 'lg', 'alcatel'];

// console.log(phones, 'phones');

// console.log(console, 'console');

// ----- read ----------
// console.log(phones[0], 'index ==> 0 --- ! First');
// console.log(phones[1], 'index ==> 1');
// console.log(phones[2], 'index ==> 2');
// console.log(phones[3], 'index ==> 3');
// console.log(phones[300], 'index ==> 3');
// console.log(phones['length'], 'length -- 1');


// const length = phones['length'];
// const length_2 = phones.length;

// console.log(phones['1'], ' <--bad');

// console.log(phones[length - 1], 'hones[length - 1]');
// console.log(phones[phones['length'] - 1], 'hones[length - 1]');



// ------ write -------

// phones[1] = 'motorola';

// console.log(phones[phones.length]);

// phones[phones.length] = 'Xiomi'
// phones[phones.length - 1] = 'Xiomi'; 

// phones[300] = 'Foo';
// console.log(phones.length / 2, 'phones.length / 2');
// console.log(phones, 'phones');
// const index = Math.floor(phones.length / 2);

// console.log(phones[index], 'phones');


// phones.length = 250;

// console.log(phones, 'phones');



// ---------- create --------

// let arr = [4, 5];
// arr.length = 4;


// let arr_2 = new Array(4, 5);

// console.log(arr, 'arr');
// console.log(arr_2 , 'arr2');

// ------------- Loop -----------------------


// console.log(phones[0], 'index ==> 0 --- ! First');
// console.log(phones[1], 'index ==> 1');
// console.log(phones[2], 'index ==> 2');
// console.log(phones[3], 'index ==> 3');
// console.log(phones[4], 'index ==> 3');

// const arr = ['apple', 'samsung', 'lg', 'alcatel'];

// console.log(arr, 'arr');

// for(let i = 0; i < arr.length ; i++) {
//   console.log(arr[i], 'i');
// }


const arr_3 = [];

arr_3.length = 3;
// const max = 10;

// for(let i = 0, max = arr_3.length; i < max ; i++) {
//   arr_3[i] = Math.floor(Math.random() * 10);
// }

for(let i = 0, max = arr_3.length; i <= max ; i++) {
    arr_3[i] = Math.floor(Math.random() * 10);
}
  

console.log(arr_3, 'arr_3');