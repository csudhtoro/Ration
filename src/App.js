import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodDetail from "./components/FoodDetail";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  let tempCart = localStorage.getItem("ShoppingCart");

  //IF CART EXISTS, OPEN IT, ELSE CREATE EMPTY CART
  useEffect(() => {
    let total = 0;
    if (typeof tempCart == "string") {
      tempCart = JSON.parse(tempCart);
    }
    if (tempCart) {
      tempCart.forEach((arrObj) => {
        total += arrObj.quantity;
      });
      setCartItems(tempCart);
      setTotalCartItems(total);
    }
  }, []);

  return (
    <div>
      <Navbar totalCartItems={totalCartItems} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route
          path="/detail"
          element={
            <FoodDetail
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalCartItems={totalCartItems}
              setTotalCartItems={setTotalCartItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalCartItems={totalCartItems}
              setTotalCartItems={setTotalCartItems}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
