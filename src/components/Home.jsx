import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";

import React from "react";

const Home = ({ query }) => {
  return (
    <div>
      <Hero />
      <HeadlineCards />
      <Food query={query} />
    </div>
  );
};

export default Home;
