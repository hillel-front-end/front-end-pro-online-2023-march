import Modal from "../../../UI-Components/Modal/Modal";
import React from "react";
import classes from "./BasketCard.module.css";
import Card from "../../../UI-Components/Card";
import BasketItem from "../BasketItem";

const BasketCard = (props) => {
  const ModalHeader = (
    <header className="modal-header">
      <h3>Shopping Cart</h3>
    </header>
  );

  return (
    <Modal
      visibility={props.visibility ? "visible" : "hidden"}
      onClose={props.onClose}
    >
      <Card className={classes.BasketCardContent}>
        {ModalHeader}
        <div>
          {props.basketItems.map((basketItem) => (
            <BasketItem
              key={basketItem.id}
              addToBasket={() => props.addToBasket(basketItem)}
              title={basketItem.title}
              description={basketItem.description}
              price={basketItem.price}
              picture={basketItem.picture}
              amount={basketItem.amount}
            />
          ))}
          {props.basketItems.length === 0 && <div>Empty Basket ...</div>}
        </div>
        {props.basketItems.length !== 0 && (
          <div> Total: {props.totalPriceBasketItems} </div>
        )}
      </Card>
    </Modal>
  );
};

export default BasketCard;
