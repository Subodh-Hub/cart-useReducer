import React from "react";
import { useContext } from "react";

import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { CartState } from "./CartContext";

const ListItem = () => {
  const { state, dispatch } = CartState();

  console.log(state.totalCount);
  console.log(state.totalPrice);
  return (
    <>
      {state.dummyData.map((el, index) => (
        <div className="list-items" key={index}>
          <div className="list-image-container">
            <img src={new URL(el.image, import.meta.url).href} alt="" />
          </div>
          <div className="phone-description">
            <h5>{el.title}</h5>
            <span>Rs. {el.price}</span>
            <br />
            <button onClick={() => dispatch({ type: "remove", ind: index })}>
              remove
            </button>
          </div>
          <div className="phone-counter">
            <FaAngleUp
              className="count"
              onClick={() => dispatch({ type: "increase", ind: index })}
            />
            <span>{el.itemCount}</span>
            <FaAngleDown
              className="count"
              onClick={() => dispatch({ type: "decrease", ind: index })}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListItem;
