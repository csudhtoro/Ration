import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h-[500px] relative">
        {/**Overlay */}
        <div className="absolute w-full h-full text-zinc-200 max-h-[500px] bg-black/40 flex flex-col justify-center items-start shadow-zinc-400 shadow-md">
          <h1 className="px-4 text-4xl sm:text-5xl md:6xl lg:7xl font-bold">
            Delivering Flavor to Your
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:6xl lg:7xl font-bold">
            <span className="text-green-500"> Doorstep!</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
