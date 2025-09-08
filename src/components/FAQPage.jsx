import React from 'react';
import FAQ from './FAQ';
import Hero from './Hero';

function FAQPage() {
  const heroContent = {
    bgImg: './img/about-banner.jpg',
    title: 'About Us',
    text: 'Home / About',
  };
  return (
    <div>
      <Hero content={heroContent} />
      <FAQ />
    </div>
  );
}

export default FAQPage;
