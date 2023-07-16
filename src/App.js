import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav/Nav";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Creative from "./components/Creative";
import Standup from "./components/Standup";
import Shows from "./components/Shows";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/standup" element={<Standup />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
