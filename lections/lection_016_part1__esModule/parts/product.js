import getProductInfo from "./product-info.js";
import getPicture, { a } from "./picture.js";


const getProductTemplate = (product, classes = []) => {
  return `
          <section class="product-item ${classes.join(" ")}">
              <div class="image-wrapper">
                  ${getPicture(product.thumbnail)}
              </div>
              <div class="content-wrapper">
                  ${getProductInfo(product)}
                  <div class="actions">
                      <button id="cart"class="button green-solid cart">
                          Add to Cart
                      </button>
                      <button class="button more">More Details</button>
                  </div>
              </div>
          </section>  
      `;
};

export default getProductTemplate;
