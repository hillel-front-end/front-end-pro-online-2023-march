import classes from "./ProductItem.module.css";
import Picture from "../../../UI-Components/Picture/Picture";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Button, ButtonsGroup } from "../../../UI-Components/Buttom/Button";

const ProductItem = (props) => {
  return (
    <div className={classes.ProductItem}>
      <div className={classes.ProductPictureWrapper}>
        <Picture picture={props.picture} description={props.description} />
      </div>
      <div className={classes.ContentWrapper}>
        <ProductInfo
          price={props.price}
          title={props.title}
          description={props.description}
        />
      </div>
      <ButtonsGroup>
        <Button onClick={props.addToBasket}>add</Button>
        <Button onClick={props.update}>view</Button>
      </ButtonsGroup>
    </div>
  );
};

export default ProductItem;
