import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieList from "./MovieList";
import { MdKeyboardArrowRight } from "react-icons/md";

const Common = ({ title, search }) => {
  console.log(search);
  return (
    <>
      <Navbar search={search} />
      <main className="main">
        <div className="container">
          <div className="main__heading"></div>
          <div className="main__feature">
            <h5 className="feature_heading">{title} </h5>
            <MdKeyboardArrowRight className="feature_icon" />
          </div>

          <MovieList search={search} />

          <br />
          <br />
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Common;
