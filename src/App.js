import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import "./main.scss";
import "./components/Components.scss";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import SingleArticle from "./components/SingleArticle";
import Blog from "./components/Blog";
import SearchOverlay from "./components/SearchOverlay";
import FAQPage from "./components/FAQPage";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <Header onSearchClick={() => setIsOverlayOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
			 <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<SingleArticle />} />

          {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} /> */}
        </Routes>
        <SearchOverlay
          isOpen={isOverlayOpen}
          onClose={() => setIsOverlayOpen(false)}
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
