import React from "react";
import "./pages.scss";
function Hero({ content }) {
  // console.log(content.bgImg);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: content?.bgImg
          ? `url(${content.bgImg})`
          : "url(./images/banner-default.jpg)",
        height: content?.height ? content.height : "60vh",
      }}
    >
      <h1 className="mt5">{content?.title}</h1>
      <h1 className="mt5">{content && content.title}</h1>
    </section>
  );
}

export default Hero;
