import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import dummyData from "../data/data";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const initialState = {
    dummyData: [],
    totalCount: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "append", payload: dummyData });
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export const CartState = () => {
  return useContext(CartContext);
};
