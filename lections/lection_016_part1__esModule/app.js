// (function() {

//   const fetchAllProducts = async () => {
//     return (await fetch("https://dummyjson.com/products")).json();
//   };

//   async function application() {
//     const { products = [] } = await fetchAllProducts();

//     //* filter/

//     renderProductTemplate(products);
//   }

//   application();
// })()

import renderProductsTemplate from "./parts/products.js";


const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

async function application() {
  const { products = [] } = await fetchAllProducts();

  //* filter/

  renderProductsTemplate(products);
}

application();
