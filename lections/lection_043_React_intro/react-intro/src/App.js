import logo from './logo.svg';
import React from "react";
import './App.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Products from "./components/ Products/ Products";

// JSX

/*
    const div = document.createElement('div');
    const span = document.createElement('span');

    div.className = 'app';
    div.append(span)

    document.getElementById('app).append(div)
 */

// Create component


//
// const MY_TAG = <div className="my-tag"><span>aaa</span></div>
//
// const a =  React.createElement(
//     'div',
//     { className: 'my-tag'},
//     React.createElement(
//         'span',
//         {},
//         'aaa'
//     )
// );;


function App() {
  return (
      <div className='app'>

          {/* -- ProductInfo:
            Demo JSX (styles, className, display data, events)
          --*/}

          {/*<ProductInfo />*/}

          {/* -- Products:
            Demo JSX (Rendering List)
          --*/}

          <Products />
      </div>
  )
}

export default App;

