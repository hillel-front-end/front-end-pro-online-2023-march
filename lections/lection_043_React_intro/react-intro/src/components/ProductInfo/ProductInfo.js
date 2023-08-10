// import './ProductInfo.css'
import classes from './ProductInfo.module.css'
import React from "react";

console.log(classes, 'classes');


function Picture(props) {

    const { picture, description } = props.productInfo;

    return (
        <img
            src={picture}
            // alt="some picture"
            alt={description}
        />
    )
}

export default function ProductInfo() {
    const flag = true;

    // dynamic classes
    const classNames = ['container', (flag && 'article' || '')].join(' ');
    const className = 'container product-info';

    // style

    const styles = {
        width: '100px',
        height: flag? '100px' : '200px',
        border: `1px solid ${flag && 'red' || 'blue'}`
    };

    // ---> data

    const product = {
        id: 5,
        title: "iPhone 13",
        description: "Apple iPhone 13 128GB Green",
        price: 2549,
        brand: "Apple",
        category: "smartphones",
        picture:
            "https://jabko.ua/image/cache/cataloge-2/repair/iphone/iPhone_SE_2020-350x350.jpg.webp",
        isAvailable: true
    };

    let picture = ''

    if (product.isAvailable) {
        picture = <Picture productInfo={product} foo="12" />
    }

    console.log(picture, 'picture');

    // --- events ----

    const onClickHandler = (event) => {
        console.log('---click -----', event);
    }

    const onChangeHandler = (event) => {
        console.log('---change -----', event);
    }

    return (
        <div className={classes.productInfo} style={styles}>
            Some information
            <div>{product.title}</div>
            {product.description}
            {product.price}

            {picture}

            <h1>Events</h1>

            <button onClick={onClickHandler}> click</button>

            <input type="text" onInput={onChangeHandler}/>
            <input type="text" onBlur={onChangeHandler}/>
            <input type="text" onFocus={onChangeHandler}/>
        </div>
    )
}