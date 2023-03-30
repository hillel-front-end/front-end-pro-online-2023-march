/// Таблица с 1 рендером на основе 2мерного массива



// В двумерном массиве A размером n на m. Заполнить случайными числами.
//     1. Найти ряд, где сумма элементов наименьшая
//     2. Найти ряд, где сумма элементов найбольшая
//     3. Поменять ряды местами (1 и 2 пункт)



const n = 5;
const m = 5;


const array = new Array(n);


let maxItem;
let maxItemIndex;

let minItem;
let minItemIndex;


// const sums = [];

for(let i = 0; i < array.length; i++) {
    array[i] = [];
    array[i].length = m;

    let sum = 0;

    for(let j = 0; j < array[i].length; j++) {
        array[i][j] = Math.floor(Math.random() * 10);
        sum += array[i][j]

        // console.log(array, 'array');
        // console.log(sum, 'sum');
        // debugger;
    }

    console.log(sum, ' <---sum from index =', i);

    if (i === 0) {
        maxItem = sum;
        maxItemIndex = i;

        minItem = sum;
        minItemIndex = i;
        continue;
    }

    if (sum > maxItem) {
        maxItem = sum;
        maxItemIndex = i;
    }

    if (minItem > sum) {
        minItem = sum;
        minItemIndex = i;
    }


    // console.log(array, 'array');
    // console.log(sum, 'sum');
    // break;

    // sums.push(sum);
    // sums[sums.length] = sum;
}

console.log('------------------');
console.log(maxItem, 'maxItem from maxItemItem ==', maxItemIndex);
console.log(minItem, 'minItem from minItemIndex == ', minItemIndex);

// console.log(array, 'array');
// console.log(sums, 'sums');

const temp = array[maxItemIndex];
array[maxItemIndex] = array[minItemIndex];
array[minItemIndex] = temp;

console.log(array, 'array');