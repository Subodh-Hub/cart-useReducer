import React from "react";
import Navbar from "./Components/Navbar";
import List from "./Components/List";

import CartContextProvider from "./Components/CartContext";

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <Navbar />
        <List />
      </CartContextProvider>
    </div>
  );
};

export default App;
