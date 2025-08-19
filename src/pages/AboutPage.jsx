import React from "react";
import Hero from "../components/Hero";
import Counter from "../components/Counter";
import AboutSection from "../components/AboutSection";

function AboutPage() {
  const heroContent = {
    bgImg: "./img/about-banner.jpg",
    title: "About Us",
    text: "Home / About",
  };
  return (
    <div>
      <Hero content={heroContent} />
      <AboutSection icons={true} />
    </div>
  );
}

export default AboutPage;
