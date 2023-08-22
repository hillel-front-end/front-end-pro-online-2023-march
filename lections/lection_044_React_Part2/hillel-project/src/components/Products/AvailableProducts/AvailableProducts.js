import classes from "./AvailableProducts.module.css";
import ProductItem from "../ProductItem";
import Card from "../../../UI-Components/Card";

const AvailableProducts = (props) => {
  const products = props.products.map((product) => (
    <Card key={product.id}>
      <ProductItem
        addToBasket={() => props.addToBasket(product)}
        update={() => props.update(product)}
        title={product.title}
        description={product.description}
        price={product.price}
        picture={product.picture}
      />
    </Card>
  ));

  return <div className={classes.AvailableProducts}>{products}</div>;
};

export default AvailableProducts;
