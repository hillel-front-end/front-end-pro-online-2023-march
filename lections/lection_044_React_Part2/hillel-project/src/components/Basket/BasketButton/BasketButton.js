import classes from "./BasketButton.module.css";
import BasketIcon from "../BasketIcon";

const BasketButton = (props) => {
  return (
    <button
      onClick={props.onOpenModal}
      className={classes.BasketButton}
      data-count={props.counter}
    >
      <BasketIcon />
    </button>
  );
};

export default BasketButton;
