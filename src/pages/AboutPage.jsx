import React from "react";
import Hero from "../components/Hero";
import Counter from "../components/Counter";

function AboutPage() {
  const heroContent = {
    title: "About us",
    text: "Let's Discover More",
    bgImg: "./images/about-banner.jpg ",
    height: "60vh",
  };
  return (
    <div>
      <Hero />
      <div className="content">
        AboutPage
        <Counter />
      </div>
    </div>
  );
}

export default AboutPage;
