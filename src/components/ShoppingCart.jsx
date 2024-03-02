import React, { useState, useEffect } from "react";

const ShoppingCart = ({
  cartItems,
  setCartItems,
  totalCartItems,
  setTotalCartItems
}) => {
  const [orderTotal, setOrderTotal] = useState(0);
  const [recalculateTotal, setRecalculateTotal] = useState(false);
  let localCart = [...cartItems];

  const handleClick = (item, selectedValue) => {
    let exist = localCart.find((o) => o.name === item.name);
    if (exist) {
      localCart.find((existingItem, i) => {
        if (existingItem.name === item.name) {
          localCart[i]["quantity"] += selectedValue;
          setCartItems([...localCart]);
          setTotalCartItems(totalCartItems + selectedValue);
          setRecalculateTotal(!recalculateTotal);
          return true;
        }
      });
    }
  };

  //GATHER THE SUBTOTAL OF ALL ITEMS IN THE CART
  useEffect(() => {
    if (localCart) {
      let tempTotal = 0;
      localCart.forEach((element) => {
        tempTotal += element.actualPrice * element.quantity;
      });
      setOrderTotal(tempTotal);
    }
  }, [recalculateTotal, localCart]);

  //WRITE WHATEVER IS CURRENTLY IN THE CART TO LOCAL STORAGE
  useEffect(() => {
    if (localCart) {
      localCart = localCart.filter((a) => a.quantity !== 0);
      let cartString = JSON.stringify(localCart);
      localStorage.setItem("ShoppingCart", cartString);
    }
  }, [localCart]);

  return (
    <section className="h-fit max-w-[1640px] mx-auto  font-poppins">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
          <h2 className="mb-8 text-4xl font-bold">Shopping Cart</h2>
          <div className="p-6 mb-8 border">
            <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
              <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                <h2 className="font-bold text-gray-500">Product name</h2>
              </div>
              <div className="hidden px-4 lg:block lg:w-2/12">
                <h2 className="font-bold text-gray-500">Price</h2>
              </div>
              <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500">Quantity</h2>
              </div>
              <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                <h2 className="font-bold text-gray-500"> Subtotal</h2>
              </div>
            </div>

            {localCart.map((item) => (
              <div key={item.id} className="py-4 mb-8 relative">
                {item.quantity > 0 ? (
                  <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                    <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                      <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4 mb-3 md:w-1/3">
                          <div className="w-full h-96 md:h-24 md:w-24 shadow-lg shadow-gray-300 rounded-md">
                            <img
                              src={item.image}
                              alt=""
                              className="object-cover w-full h-full rounded-md"
                            />
                            <div className="absolute flex items-center justify-center rounded-full bg-green-500 text-white md:text-lg text-2xl text-center font-semibold md:w-6 md:h-6 w-10 h-10 p-6 md:p-4 -left-2 top-0 border-0 border-gray-900 shadow-md shadow-gray-500">
                              {item.quantity > 0 ? item.quantity : " "}
                            </div>
                          </div>
                        </div>
                        <div className="w-2/3 px-4">
                          <h2 className="mb-2 text-xl font-bold">
                            {item.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-2/12">
                      <p className="text-lg font-bold text-black">
                        ${item.actualPrice}
                      </p>
                    </div>
                    <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
                      <div className="inline-flex items-center px-4 font-bold text-gray-500 border border-gray-400 rounded-md gap-6">
                        <button className="py-2 hover:text-gray-900 border-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-dash"
                            viewBox="0 0 16 16"
                            onClick={() => {
                              handleClick(item, -1);
                            }}
                          >
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                          </svg>
                        </button>
                        <button className="py-2 hover:text-gray-900 border-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                            onClick={() => {
                              handleClick(item, 1);
                            }}
                          >
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                      <p className="text-lg font-bold text-black">
                        ${item.actualPrice * item.quantity}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-full px-4 mb-4 lg:w-1/2 ">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700">Apply Coupon</span>
                <input
                  type="text"
                  className="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 "
                  placeholder="Burgertown"
                  required
                />
                <button className="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-green-500 rounded-md lg:w-32 hover:bg-green-600">
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full px-4 mb-4 lg:w-1/2 ">
              <div className="p-6 border border-blue-100 bg-gray-50 md:p-8">
                <h2 className="mb-8 text-3xl font-bold text-gray-700">
                  Order Summary
                </h2>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-xl font-bold text-gray-700">
                    ${orderTotal}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700">Shipping</span>
                  <span className="text-xl font-bold text-gray-700">Free</span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 font-semibold">Pay:</span>
                  <span className="text-2xl font-bold text-gray-700">
                    ${orderTotal}
                  </span>
                </div>
                <h2 className="text-lg text-gray-500">We Accept:</h2>
                <div className="flex items-center gap-2 mb-4 ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/196/196578.png?track=ais"
                    alt=""
                    className="object-cover h-16 w-26"
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968279.png?track=ais"
                    alt=""
                    className="object-cover h-16 w-26"
                  />

                  <img
                    src="https://cdn-icons-png.flaticon.com/128/196/196566.png?track=ais"
                    alt=""
                    className="object-cover h-16 w-26"
                  />
                </div>
                <div className="flex items-center justify-between ">
                  <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-green-500 rounded-md hover:bg-green-600">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
