// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="mx-auto w-[80%]">
        <Header />
        <main className="flex flex-row flex-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
