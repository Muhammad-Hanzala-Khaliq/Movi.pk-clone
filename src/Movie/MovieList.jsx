import React, { useState } from "react";

import Api from "./Api";

const MovieList = ({ search }) => {
  const [api, setApi] = useState(Api);

  return (
    <div className="movie__list">
      {" "}
      {/* Move .movie__list outside of the loop */}
      {api.map((value, index) => {
        return (
          <>
            <div className="card">
              <div className="poster">
                <img src={value.imgUrl} alt="" />
              </div>
              <div class="details" key={index}>
                <h2 class="logo">{value.movieName}</h2>
                <h3>Directed By @</h3>
                <div class="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <span>4/5</span>
                </div>
                <div class="tags">
                  <span>Sci-fi</span>
                  <span>Action</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MovieList;

// .filter((value) => {
//   return search === "" ? value : value.movieName.includes(search);
// })
