import {
  AlignLeft,
  Crown,
  HelpCircle,
  Search,
  ShoppingBag,
  Star,
  Tag,
  Truck,
  Users,
  Wallet,
  X
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ totalCartItems, setQuery }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleInput = (e) => setQuery(e.target.value);

  return (
    <motion.div
      className="max-w-screen ax-auto flex justify-between items-center p-4"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {/* Left Side */}
      <div className="flex items-center gap-10">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AlignLeft size={30} />
        </div>
        <a
          href="/"
          className="text-2xl lg:text-3xl px-2 font-bold font-poppins"
        >
          <h2>Ration</h2>
        </a>
        <div className="hidden lg:flex bg-zinc-200 rounded-full p-1 text-[0.6rem]">
          <p className="bg-green-500 text-white font-bold rounded-full p-2 shadow-md shadow-zinc-500 cursor-pointer">
            Delivery
          </p>
          <p className="p-2 font-medium">Pick-Up</p>
        </div>
      </div>
      {/**Search input */}
      <div className="bg-zinc-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] xl:ml-auto xl:mr-4">
        <Search size={20} />
        <input
          onInput={handleInput}
          type="text"
          placeholder="Search..."
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      {/**Cart */}
      <button
        className="text-black  md:flex items-center py-2 border-0 relative"
        onClick={() => {
          navigate(`/cart`);
        }}
      >
        <ShoppingBag />
        {totalCartItems > 0 ? (
          <div className="absolute flex items-center justify-center rounded-full bg-green-500 text-white  text-xs p-2 text-center font-semibold w-6 h-6 left-2 -top-1 border-0 border-gray-900 shadow-md shadow-gray-500">
            {totalCartItems}
          </div>
        ) : (
          ""
        )}
      </button>
      {/*Mobile Menu*/}
      {/**Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/**Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <X
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <div className="text-2xl font-bold pt-6 px-6">Ration</div>
        <nav>
          <ul className="flex flex-col p-4 text-zinc-800 font-semibold">
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Truck size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Star size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Wallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <HelpCircle size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Tag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Crown size={25} className="mr-4" />
              Most Popular
            </li>
            <li className="text-xl py-4 flex hover:bg-green-500 hover:text-white rounded-full transition-300 p-4">
              <Users size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
