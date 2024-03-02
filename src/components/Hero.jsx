import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <motion.div
        className="max-h-[500px] relative"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/**Overlay */}
        <div className="absolute w-full h-full text-zinc-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-start shadow-zinc-400 shadow-md">
          <h1 className="px-4 text-4xl sm:text-5xl md:6xl lg:7xl font-bold">
            Delivering Flavor to Your
          </h1>
          <motion.h1
            className="px-4 text-4xl sm:text-5xl md:6xl lg:7xl font-bold"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-green-500"> Doorstep!</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg"
            alt="/"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
