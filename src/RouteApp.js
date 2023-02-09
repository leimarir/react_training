import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/ButtonAppBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FormUser from "./Components/FormUser";

const RouterApp = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<FormUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;