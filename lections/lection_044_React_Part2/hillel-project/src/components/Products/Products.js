import AvailableProducts from "./AvailableProducts/AvailableProducts";

const Products = (props) => {
  const availableProducts = props.products.filter(
    (product) => product.isAvailable
  );

  return (
    <div className="products">
      <AvailableProducts
        products={availableProducts}
        addToBasket={props.addToBasket}
        update={props.update}
      />
    </div>
  );
};

export default Products;
