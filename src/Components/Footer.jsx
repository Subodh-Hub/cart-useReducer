import { useContext } from "react";
import React from "react";
import { CartState } from "./CartContext";

const Footer = () => {
  const { state } = CartState();
  return (
    <footer>
      <hr />
      <div className="cart-total">
        <h5>Total</h5>
        <span>Rs.{state.totalPrice}</span>
      </div>
    </footer>
  );
};

export default Footer;
