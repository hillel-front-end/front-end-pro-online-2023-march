import "./App.css";
import React, { useReducer, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Container from "./UI-Components/Container";
import BasketCard from "./components/Basket/BasketCard";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "Apple iPhone 9 128GB Green",
    price: 549,
    brand: "Apple",
    category: "smartphones",
    picture:
      "https://jabko.ua/image/cache/cataloge-2/slider/pc-2/2-350x350.jpg.webp",
    isAvailable: true,
  },
  {
    id: 2,
    title: "iPhone 10",
    description: "Apple iPhone 14 Pro Max 256GB Gold",
    price: 1549,
    brand: "Apple",
    category: "smartphones",
    picture:
      "https://jabko.ua/image/cache/cataloge-2/cat-14/photo_2022-09-07_23-43-23%20(2)-350x350.jpg.webp",
    isAvailable: true,
  },
  {
    id: 3,
    title: "iPhone 11",
    description: "Apple iPhone 1 128GB Green",
    price: 2549,
    brand: "Apple",
    category: "smartphones",
    picture:
      "https://jabko.ua/image/cache/cataloge-2/cat-14/photo_2022-09-07_23-43-23-350x350.jpg.webp",
    isAvailable: true,
  },
  {
    id: 4,
    title: "iPhone 12",
    description: "Apple iPhone 12 128GB Green",
    price: 2549,
    brand: "Apple",
    category: "smartphones",
    picture:
      "https://jabko.ua/image/cache/cataloge-2/baners-cat-mob/iphone-13/13-pro-max-2-350x350.jpg.webp",
    isAvailable: true,
  },

  {
    id: 5,
    title: "iPhone 13",
    description: "Apple iPhone 13 128GB Green",
    price: 2549,
    brand: "Apple",
    category: "smartphones",
    picture:
      "https://jabko.ua/image/cache/cataloge-2/repair/iphone/iPhone_SE_2020-350x350.jpg.webp",
    isAvailable: false,
  },
];

// let counter = 1;
//action = { type: 'remove', payload: product }

const basketReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      let basketItem = state.basketItems.find(
        (basketItem) => basketItem.id === action.payload.id
      );
      let basketItems;

      if (basketItem) {
        basketItem.amount += 1;
        basketItems = [...state.basketItems];
      } else {
        basketItem = { amount: 1, ...action.payload };
        basketItems = [...state.basketItems, basketItem];
      }

      return {
        ...state,
        basketCounter: state.basketCounter + 1,
        totalPriceBasketItems: state.totalPriceBasketItems + basketItem.price,
        basketItems,
      };
    }

    case "remove": {
      // all logic for remove from basket
    }
  }

  return {
    ...state,
  };
};

const initialData = {
  basketItems: [],
  basketCounter: 0,
  totalPriceBasketItems: 0,
};

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  // const [basketItems, setBasketItems] = useState([]);
  // const [basketCounter, setBasketCounter] = useState(0);
  // const [totalPriceBasketItems, setTotalPriceBasketItems] = useState(0);

  const [state, dispatch] = useReducer(basketReducer, initialData);

  const addToBasket = (product) => {
    dispatch({ type: "add", payload: product });
    // let basketItem = basketItems.find(basketItem => basketItem.id === product.id);
    //
    // if (basketItem) {
    //     basketItem.amount += 1;
    //     setBasketItems(prev => [...prev]);
    // } else {
    //     basketItem = { ...product, amount: 1 }
    //     setBasketItems(prev => [...prev, basketItem]);
    // }
    //
    // setTotalPriceBasketItems(prevTotal => prevTotal + basketItem.price);
    // setBasketCounter(prevCounter => prevCounter + 1);
  };

  const onOpenModal = () => {
    setModalVisibility(true);
  };

  const onCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className="App">
      <Header basketCounter={state.basketCounter} onOpenModal={onOpenModal} />
      <Container>
        <Products products={products} addToBasket={addToBasket} />
      </Container>
      <BasketCard
        visibility={modalVisibility}
        basketItems={state.basketItems}
        totalPriceBasketItems={state.totalPriceBasketItems}
        addToBasket={addToBasket}
        onClose={onCloseModal}
      />
    </div>
  );
}

export default App;
