
// ------------  Test      ---------------------

/*

level 1

* Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

* Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li

* В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива парная – вырезать два элемента, которые можно считать центральными

level 2

* Организовать циклический ввод с клавиатуры элементов, которые будут добавляться к существующему массиву A = [1,2,3] в конец. 
  Предусмотреть символ прекращения ввода «&»

Лекция

*/

// * Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’


// const arr = [1, 2, 3, 4, 5];

// // console.log(arr.join('🤣'))
// document.write(arr.join('*'))

// const arr = ['nokia', 'lg', 'iphone'];


// document.write('<ul>');
// for(let item of arr) {
//   document.write('<li>' + item + '</li>')
// }
// document.write('</ul>');

// let temlate = '<ul>'

// for(let item of arr) {
//   temlate += '<li>' + item + '</li>'
// }

// temlate += '</ul>';

// document.write(temlate);

{/* <ul>
    <li> apple </li>
    <li> samsung </li>
    <li> lg </li>
</ul>  */}

// const arr = ['nokia', 'lg', 'iphone'];
/*
<ul><li>nokia</li><li>lg</li><li>iphone</li></ul>

*/

// let temlate = '<ul><li>' + arr.join('</li><li>') +'</li></ul>';

// console.log(temlate)

// document.write(
//   temlate
// )

// -------------------------
/* В массиве [1,2,3,4,5,6] вырезать центральный элемент, 
если длина массива парная – вырезать два элемента, которые можно считать центральными

*/

/*
 [1, 2, 3, 4, 5  ] - > 3 - > 5 / 2 = 5 / 2 - 1 = 2.5 - 1 = ceil(1.5) = 2
 [1, 2, 3, 4, 5, 6] -> 3, 4  -> 6 / 2 = 3 - 1 =
*/

const mass = [1,2,3,4,5,6];

const count = mass.length % 2  == 0 ? 2 : 1;
const position = Math.ceil(mass.length / 2) - 1;

mass.splice(position, count);

console.log(mass);
console.log(count, 'count');
console.log(mass, 'mass');



/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
  * ?? homework questions
*/


// let team_1 = ['A', 'B', 'C'];
// let team_2 = ['D', 'H', 'U'];

// [1, 'asd', false, undefined, null,  []]

// const teams = [
//   team_1,
//   team_1
// ];
// ---- read -----

const teams = [
  ['A', 'B', 'C'],
  ['D', [ 'k', 'i' ], 'U']
];
// const team_1 = teams[0];
// console.log(team_1[0], 'team_1');
// console.log(teams[0], 'teams');

const plaer_1_1 = teams[0][0];
const plaer_2_3 = teams[1][2];

console.log(plaer_2_3, 'plaer_2_3');
console.log(teams[1][1][0]);

// --------------------------------

const len = 5;
const mass_2 = new Array(len);


for(let row = 0; row < mass_2.length; row++) {
  mass_2[row] = new Array(len);

  for(let col = 0; col < mass_2[row].length; col++) {
    mass_2[row][col] = Math.floor(Math.random() * 100);
  }
}

console.log(mass_2, 'mass_2');

// ---------------------------------------