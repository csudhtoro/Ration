import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = ({ query }) => {
  return (
    <div>
      <Hero />
      <HeadlineCards />
      <Food query={query} />
      <Footer />
    </div>
  );
};

export default Home;
