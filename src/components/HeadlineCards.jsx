import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 pt-12 pb-6 grid md:grid-cols-3 gap-6">
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white shadow-zinc-400 shadow-md">
          <p className="font-bold text-2xl px-2 pt-4">Buy One Get One Free!</p>
          <p className="px-2">Through 2024</p>
          <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-3 hover:bg-gray-100 ">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1465911817134-741b5e473a1b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white shadow-zinc-400 shadow-md">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-3 hover:bg-gray-100 ">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      {/**Card */}
      <div className="rounded-xl relative">
        {/**Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white shadow-zinc-400 shadow-md">
          <p className="font-bold text-2xl px-2 pt-4">Any Room For Dessert?</p>
          <p className="px-2">Your Sweet Tooth Will Thank You</p>
          <button className="border-white bg-white text-black font-bold mx-2 absolute bottom-3 hover:bg-gray-100">
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
