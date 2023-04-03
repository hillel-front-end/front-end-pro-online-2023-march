
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