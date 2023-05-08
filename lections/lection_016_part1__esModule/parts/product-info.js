import { toPercent, toCoin, unWrapFromCoin } from "../common/tools.js";

const getProductInfo = ({ title, price, description, discountPercentage }) => {
  const total = unWrapFromCoin(
    toCoin(price) - toCoin(price) * toPercent(discountPercentage)
  );

  return `
          <div class="product-info">
              <div class="title">
                  <h4>${title}</h4>
              </div>
              <div class="price">
                  ${price}, 
                  price with discount ${total.toFixed(2)}
              </div>
              <div class="description">${description}</div>
          </div>
      `;
};

export default getProductInfo;
