import React from "react";
import Movie from "./Movie";
function Results(props) {
  const { moviesArr } = props;
  console.log("moviesArr: ", moviesArr);

  return (
    <div className="results-container">
      {moviesArr && moviesArr.map((movie) => <Movie movie={movie} />)}
    </div>
  );
}

export default Results;
