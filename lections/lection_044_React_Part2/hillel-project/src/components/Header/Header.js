import classes from "./Header.module.css";
import BasketButton from "../Basket/BasketButton";

const Header = (props) => {
  console.log('---render Header ----');

  return (
    <header className={classes.Header}>
      <div className={classes.HeaderBasketCounter}>
        <BasketButton
          counter={props.basketCounter}
          onOpenModal={props.onOpenModal}
        />
      </div>
    </header>
  );
};

export default Header;
