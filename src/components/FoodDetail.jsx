import { ChevronLeft, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FoodDetail = ({
  cartItems,
  setCartItems,
  totalCartItems,
  setTotalCartItems
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(1);

  let localCart = [...cartItems];

  const handleClick = (item, selectedValue) => {
    let exist = localCart.find((o) => o.name === item.name);
    if (exist) {
      localCart.find((existingItem, i) => {
        if (existingItem.name === item.name) {
          localCart[i]["quantity"] += selectedValue;
          setCartItems([...localCart]);
          setTotalCartItems(totalCartItems + selectedValue);
          console.log(localCart);
          return true;
        }
      });
    } else {
      let tempItem = item;
      tempItem.quantity = selectedValue;
      cartItems.push(tempItem);
      setTotalCartItems(totalCartItems + selectedValue);
      console.log(localCart);
      return true;
    }
  };

  const { name, image, actualPrice, calories, description } =
    location.state.data;

  //SCROLL TO THE TOP OF THE SCREEN ON LOAD
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scrolled to the top");
  }, []);

  //WRITE WHATEVER IS CURRENTLY IN THE CART TO LOCAL STORAGE
  useEffect(() => {
    if (localCart) {
      let cartString = JSON.stringify(localCart);
      localStorage.setItem("ShoppingCart", cartString);
    }
  }, [localCart]);

  return (
    <section className="h-screen body-font overflow-hidden text-gray-700">
      <div className="group py-4 z-10">
        <button
          className="flex justify-between gap-2 items-center rounded-md px-8 py-1 border-0 md:text-lg text-black font-semibold"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 group-hover:scale-150 transition"
          />
          Back
        </button>
      </div>
      <div className="container mx-auto px-2 py-8">
        <div className="mx-auto flex flex-wrap xl:w-4/5">
          <img
            alt="product"
            className="w-full rounded-lg object-cover shadow-lg shadow-gray-300 lg:w-1/2"
            src={image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h1 className="title-font mb-1 text-start text-2xl font-bold text-gray-900 md:text-4xl">
              {name}
            </h1>
            <p className="leading-relaxed">{description}</p>
            <div className="mb-5 mt-6 flex items-center justify-between border-b-2 border-gray-200 pb-5">
              <span className="title-font font-semibold text-gray-900 sm:text-xl md:text-2xl">
                ${actualPrice}
              </span>
              <span className="mr-2 text-sm">{calories} Calories</span>
            </div>
            <div className="flex w-full items-center justify-start gap-4 sm:gap-6">
              <select
                id="quantity"
                className="border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[4rem] p-2.5"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option defaultValue={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                className="flex rounded-md border-1 bg-green-500 px-4 py-1 text-white hover:bg-green-600 focus:outline-none sm:px-6 sm:py-2"
                onClick={() => {
                  handleClick(location.state.data, Number(selectedValue));
                }}
              >
                Add to Cart
              </button>
              <Star />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;
