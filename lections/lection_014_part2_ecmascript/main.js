// obj = {
//     foo: 12,
// }

// DOM, polyfill

// let name = null;
// let text = "missing";
// let result = name ?? text;

// ------- let and end -------
// let a = 13;

{
  let a = 12;
}

// console.log(a, 'a'); // error

// if, loop, swithc

if (true) {
  var b = 15;
  let h = 13;

  console.log(h, "h");
  if (true) {
    let b = 16;

    console.log(b, "b nested if");
  }
}

// console.log(h, "h");
// console.log(b, "b");
// -------------

// for (let i = 0; i < 3; i++) {
//   // LE = {i :  1}
//   console.log(i, "start call setTimeoout");
//   setTimeout(function () {
//     // LE = { scope: BS_i_1}
//     console.log(i, "i");
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//   // LE = {i :  1}
//   console.log(i, "start call setTimeoout");
//   setTimeout(function () {
//     // LE = { scope: window}
//     console.log(i, "i -- setTimeoout");
//   }, 5000);
// }

// console.log(i);

// ------ template string --------
const getFullName = () => "Valera";

let a1 = 12;
let a2 = "1";
let b2 = "2" + " " + a1 + " " + " some value " + getFullName();
let c2 = `3


`;

let c3 = `2 ${a1} some value ${getFullName()}`;

console.log(c3, "c");

//
// fetch data from server
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};


// Hometask --- refactoring  ---- decomposition
async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  console.log(prouducts, "prouducts");

  const productsTamplate = `
   <article class="products">
        ${prouducts.map((product) => `
            <section class="product-item">
                <div class="image-wrapper">
                    <img
                        src="${product.thumbnail}"
                        alt=""
                        class="image"
                    />
                </div>
                <div class="content-wrapper">
                    <div class="title">
                        <h4>${product.title}</h4>
                    </div>
                    <div class="price">
                        ${product.price}, 
                        price with discount ${
                        ((product.price * 100 - (product.discountPercentage / 100) * (product.price * 100))) / 100
                        }
                    </div>
                    <div class="description">${product.description}</div>
                    <div class="actions">
                        <button id="cart"class="button green-solid cart">
                            Add to Cart
                        </button>
                        <button class="button more">More Details</button>
                    </div>
                </div>
            </section>  
        `).join("")}
   </article>
  `;

  document.getElementById("app").innerHTML = productsTamplate;
}

getAllProducts();
