const fetchAllProducts = async () => {
    try {
        return (await fetch(prompt('Input url'))).json();
    } catch(e) {
        fetchAllProducts();
        // throw e;
    }
};

const filters = {
  filter_price: (productPrice, price) => productPrice < price,
  filter_title: (productTitle, title) => productTitle.indexOf(title) < 0,
  filter_brand: () => true,
};

const criteria = ["title", "price"];

const getUserInput = (criteriaList) => {
//   foo;
  return criteriaList.reduce((acc, k) => {
    const value = prompt(`Input value for ${k}`);

    if (!value) return acc;

    return { ...acc, [k]: value };
  }, {});
};

const matcher = ({ key, productValue, userValue }) => {
  const filter = filters[`filter_${key}`]; //[title]

  if (typeof filter !== "function") {
    console.warn(`Filter for ${key} is not defined`);
    return true;
  }

  if (!productValue || !userValue) return false;

  return filter(productValue, userValue);
};

const getFilteredProducts = (products, criteria) => {
  const keys = Object.keys(criteria);

  if (products.length === 0) {
    throw new Error('Empty products !!');
  }


  return products.filter((product) =>
    keys.every((key) =>
      matcher({
        key,
        productValue: product[key],
        userValue: criteria[key],
      })
    )
  );
};

const showHint = (message) => alert(`Happened Error: ${message}`);

async function application() {
  // foo; // outside try
  try {
    let { products = [] } = await fetchAllProducts();

    // const data = getUserInput(criteria);
    // const hasValue = Object.values(data).length;

    if (true) {
      products = getFilteredProducts([], {});
    }
  } catch (error) {
    console.log(error.name, "name");
    console.log(error.message, "message");
    showHint(error.message);
    // alert(error.message);
    // setTimeout(() => {
    //     connect()
    // }, 4000)
  }
}

// application();

// console.log("----- work -------");

// -------------   --- FP --  ------------------------

/*
    1)Чистые функции не имеют побочных эффектов.(не влияет на свое окружене)
    2)Все полезные чистые функции должны возвращать что-нибудь.
    3)Чистая функция всегда возвращает одинаковые значения для одинаковых входных данных.
*/

 c = 3;

function sum(a, b) {
  // c =  a + b;
  // return c;

  return a + b + c
}

console.log(sum(1, 2))

c = 5;

console.log(sum(1, 2))


/*
    Цель чистоты — не сделать полностью весь код чистым, а оптимизировать там где это возможно,
    так как  все чистым сделать не получится

    sendAjax('add-new-user'), fetch('/get-user-info-by-id', id)

    fs.writeFile('file.json' callback) 
    // element.addEventListener
    // Math.random()
    // Date.now
*/


