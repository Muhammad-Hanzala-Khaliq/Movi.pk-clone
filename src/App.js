import React from "react";
import Main from "./Movie/Main";
import "./App.css";
import HollyWooodMovies from "./Movie/HollyWoodMovies";
import { Route, Routes } from "react-router-dom";
import PunjabiMovies from "./Movie/PunjabiMovies";
import Genre from "./Movie/Genre";
import IndianMovies from "./Movie/IndianMovies";
import SouthIndian from "./Movie/SouthIndianMovies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/hollywood" element={<HollyWooodMovies />} />
        <Route path="/punjabi" element={<PunjabiMovies />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/indian" element={<IndianMovies />} />
        <Route path="/south" element={<SouthIndian />} />
      </Routes>
    </>
  );
};

export default App;
