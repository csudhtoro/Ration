import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-zinc-700 font-bold text-4xl text-center">
        Categories
      </h1>
      {/**Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 ">
        {categories.map((item) => (
          <div
            key={item.id}
            className="shadow-sm shadow-gray-500 bg-zinc-100 rounded-lg p-4 flex justify-center items-center gap-6 cursor-pointer"
          >
            <h2 className="font-bold sm:text-lg">{item.name}</h2>
            <img className="w-12" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
