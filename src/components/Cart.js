import React, { useState } from "react";

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div
      className={`absolute top-full right-0 bg-white border border-gray-300 px-4 py-3 w-80 text-start pb-6 ${
        props.showBasket ? "" : "hidden"
      }`}
      onMouseEnter={props.handleBasketHover}
      onMouseLeave={props.handleBasketLeave}
    >
      <p className="text-xl font-bold">Koszyk:</p>
      <div className="w-full h-[1px] bg-gray-300 my-3" />
      {cartItems.length === 0 ? (
        <p className="text-center text-sm">Brak produktów w koszyku</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} zł
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
