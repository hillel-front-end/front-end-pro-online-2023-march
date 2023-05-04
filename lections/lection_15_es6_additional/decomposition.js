// fetch data from server
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

const getPictures = (thumbnail) => {
  thumbnail = thumbnail
    ? thumbnail
    : "https://40.media.tumblr.com/2a46a0ec64f5d1c0dcc8814baf9833f4/tumblr_nj930lpXGB1qif4c6o1_1280.jpg";

  return `
        <img
            src="${thumbnail}"
            alt=""
            class="image"
        />
    `;
};

// Hometask --- refactoring  ---- decomposition

const divToHundred = (v) => v / 100;
const toPercent = (v) => divToHundred(v);
const toCoin = (v) => v * 100;
const unWrapFromCoin = (v) => divToHundred(v);

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

const getProductItem = (product, classes = []) => {
  return `
        <section class="product-item ${classes.join(" ")}">
            <div class="image-wrapper">
                ${getPictures(product.thumbnail)}
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

async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  const productsTamplate = `
     <article class="products">
        ${prouducts
          .map((product) => {
            const { brand, category } = product;
            const classesList = [
              brand.split(" ").join("-").toLowerCase(),
              category.toLowerCase(),
            ];

            return getProductItem(product, classesList);
          })
          .join("")}
     </article>
    `;

  document.getElementById("app").innerHTML = productsTamplate;
}

getAllProducts();
