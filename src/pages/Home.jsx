import React from "react";
import Hero from "../components/home/Hero";
import Details from "../components/home/Details";
import Card from "../components/home/Card";
import Footer from "../components/shared/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <Details />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
