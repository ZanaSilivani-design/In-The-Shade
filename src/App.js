import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import About from "./pages/about";
import Resources from "./pages/resources";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import Contact from "./pages/contact";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
