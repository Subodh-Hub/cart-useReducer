import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartState } from "./CartContext";

const Navbar = () => {
  const { state } = CartState();
  return (
    <div className="navContainer">
      <nav>
        <h4>Subodh Web Wizard</h4>
        <div className="icon">
          <FaCartPlus className="icon-cart" />
          <div className="totalCount">
            <p>{state.totalCount}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
