import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import MovieList from "./MovieList";
import LatestMovies from "./LatestMovies";

const Herosection = ({ search }) => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__heading">
            <h3>Recommended: fastest browsing experience with brave browser</h3>
          </div>
          <div className="main__feature">
            <h5 className="feature_heading">Featured Movies </h5>
            <MdKeyboardArrowRight className="feature_icon" />
          </div>

          <MovieList search={search} />
          <LatestMovies search={search} />
        </div>
      </main>
    </>
  );
};

export default Herosection;
