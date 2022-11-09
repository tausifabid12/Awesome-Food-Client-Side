import React from "react";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import HomeMenu from "./HomeMenu/HomeMenu";
import InfoCard from "./InfoCard/InfoCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCard />
      <Features />
      <HomeMenu />
    </div>
  );
};

export default Home;
