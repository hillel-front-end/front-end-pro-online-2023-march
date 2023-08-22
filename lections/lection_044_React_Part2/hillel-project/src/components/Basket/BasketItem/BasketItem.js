import classes from "./BasketItem.module.css";
import DeleteIcon from "../../../UI-Components/Icon";
import Picture from "../../../UI-Components/Picture";
import ProductInfo from "../../Products/ProductInfo";
import CounterWrapper from "../../../UI-Components/CounterWrapper/CounterWrapper";
import { Button } from "../../../UI-Components/Buttom/Button";

const BasketItem = (props) => {
  return (
    <div className={classes.basketItem}>
      <DeleteIcon
        className={classes.deleteButton}
        src="https://www.iconpacks.net/icons/3/free-icon-red-delete-10437.png"
      />
      <div className={classes.pictureWrapper}>
        <Picture
          className={classes.picture}
          picture={props.picture}
          description={props.description}
        />
      </div>
      <div>
        <ProductInfo
          price={props.price}
          title={props.title}
          description={props.description}
        />
      </div>
      <CounterWrapper>
        <Button onClick={props.addToBasket}>+</Button>
        <span className="count">{props.amount}</span>
        <Button>-</Button>
      </CounterWrapper>
    </div>
  );
};

export default BasketItem;
