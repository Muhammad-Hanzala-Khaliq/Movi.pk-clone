import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import MovieList from "./MovieList";
const LatestMovies = ({ search }) => {
  return (
    <>
      <section className="latest-movies">
        <div className="main__feature">
          <h5 className="feature_heading">Latest Updated Movies </h5>
          <MdKeyboardArrowRight className="feature_icon" />
        </div>
        <MovieList search={search} />

        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default LatestMovies;
