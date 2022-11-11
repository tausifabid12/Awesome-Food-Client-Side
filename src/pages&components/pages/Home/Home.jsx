import React from "react";
import Features from "./Features/Features";
import Gallery from "./Gallery/Gallery";
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
      <Gallery />
    </div>
  );
};

export default Home;
