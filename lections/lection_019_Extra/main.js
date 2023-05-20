const fetchAllProducts = async () => {
    return (await fetch("https://dummyjson.com/products")).json();
};



const filters = {
    filter_price: (productPrice, price) => productPrice < price,
    filter_title: (productTitle, title) => productTitle.indexOf(title) < 0,
    filter_brand: () => true
};

const criteria = ['title', 'price'];

const getUserInput = (criteriaList) => {
    return criteriaList.reduce((acc, k) => {
        const value = prompt(`Input value for ${k}`);

        if (!value) return acc;

        return { ...acc, [k]: value};
    }, {})
}

const matcher = ({ key, productValue , userValue}) => {
       const filter = filters[`filter_${key}`]; //[title]

       if (typeof filter !== 'function') {
            console.warn(`Filter for ${key} is not defined`);
            return true;
       }

       if (!productValue || !userValue) return false;

       return filter(productValue, userValue);
}

const getFilteredProducts = (products, criteria) => {
    const keys = Object.keys(criteria);

    return products.filter((product) =>
        keys.every((key) =>
            matcher({
                key,
                productValue: product[key],
                userValue: criteria[key]
            })
        )
    );
}
async function application() {
    let { products = [] } = await fetchAllProducts();

    const data = getUserInput(criteria);
    const hasValue = Object.values(data).length

    if (hasValue) {
        products = getFilteredProducts(products, data);
    }

    // renderProductsTemplate(products);
}

// application();

// -----------------------------
// ----------- hint: string, number, default ------------------

const person = {
    name: 'Valera',
    age: 28,
    toString() {
        return this.name
    },
    valueOf() {
        return this.age;
    }
}

const person2 = {
    name: 'Pety',
    age: 30,
    toString() {
        return this.name
    },
    valueOf() {
        return this.age;
    }
}


console.log(person, 'person');
// string
alert(person)

// number
console.log(Number(person));
console.log(person2 > person);
console.log(person2 - person);


// -- default ----


// console.log('213' == 123)
// console.log(person2 + person);

console.log(person2 + 500);
// ------ Symbol -------


person[Symbol.toPrimitive] = function (hint) {
    if (hint === 'string') {
        return this.name + ' front toPrimitive';
    }

    return this.age + 10;
}

console.log(typeof String(person), 'string');
console.log(Number(person), 'number');
console.log(person + person2, 'default');
