import getProductTemplate from './product.js'

async function renderProductsTemplate(products) {
    const productsTemplate = `
       <article class="products">
          ${products
            .map((product) => {
              const { brand, category } = product;
              const classesList = [
                brand.split(" ").join("-").toLowerCase(),
                category.toLowerCase(),
              ];
  
              return getProductTemplate(product, classesList);
            })
            .join("")}
       </article>
      `;
  
    document.getElementById("app").innerHTML = productsTemplate;
  }


  export default renderProductsTemplate;
  