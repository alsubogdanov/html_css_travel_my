import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import "./main.scss";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
