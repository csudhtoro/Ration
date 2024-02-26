import React, { useEffect, useState } from "react";
import { categories, data } from "../data/data";
import { useNavigate } from "react-router-dom";

const Food = ({ query }) => {
  const [foods, setFoods] = useState(data);
  const navigate = useNavigate();

  //Filter type - burgers, pizza, etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by price- $$$$, $$$, etc
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  //Filter by query
  const filterBySearch = (searchTerm) => {
    setFoods(
      data.filter((item) => {
        return searchTerm.toLowerCase() === " "
          ? setFoods(data)
          : item.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  };

  useEffect(() => {
    filterBySearch(query);
  }, [query]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-4">
      <div className="flex flex-col lg:flex-row justify-between pt-6">
        {/**Filter Price*/}
        <div className="mx-auto">
          <p className="font-bold text-zinc-700">Filter By Price</p>
          <div className="flex justify-start max-w-[390px] w-full gap-1 lg:justify-center lg:gap-2">
            <button
              onClick={() => setFoods(data)}
              className="text-sm shadow-sm shadow-gray-500 text-green-500 font-bold hover:bg-gray-100 border-0"
            >
              All
            </button>
            <button
              onClick={() => filterPrice("$")}
              className="text-sm shadow-sm shadow-gray-500 text-green-500 font-bold hover:bg-gray-100 border-0"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="text-sm shadow-sm shadow-gray-500 text-green-500 font-bold hover:bg-gray-100 border-0"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="text-sm shadow-sm shadow-gray-500 text-green-500 font-bold hover:bg-gray-100 border-0"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="text-sm shadow-sm shadow-gray-500 text-green-500 font-bold hover:bg-gray-100 border-0"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/**Filter Row */}
      <div className="max-w-[1640px] m-auto px-4 py-4">
        {/**Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 ">
          {categories.map((item) => (
            <button
              key={item.id}
              className="border-0 shadow-md shadow-gray-500 hover:bg-zinc-100 rounded-lg p-4 flex justify-center items-center gap-6 cursor-pointer"
              onClick={() => {
                item.name === "All" ? setFoods(data) : filterType(item.name);
              }}
            >
              <h2 className="font-bold sm:text-lg">{item.name}</h2>
              <img className="w-12" src={item.image} alt={item.name} />
            </button>
          ))}
        </div>
      </div>

      {/**Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="  shadow-lg rounded-md cursor-pointer"
            onClick={() => {
              navigate(`/detail`, { state: { data: item } });
            }}
          >
            <img
              className="w-full h-[200px] object-scale-down md:object-cover rounded-md"
              src={item.image}
              alt={item.name}
            />
            <div className="sm:flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="font-bold text-green-500 text-lg p-1 rounded-lg">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
