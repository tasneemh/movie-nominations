import React from "react";
import Movie from "./Movie";
function Results(props) {
  const { moviesArr, selectedMovie, setSelectedMovie } = props;
  console.log("moviesArr: ", moviesArr);

  return (
    <div className="results-container">
      {moviesArr &&
        moviesArr.map((movie) => (
          <Movie
            movie={movie}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
    </div>
  );
}

export default Results;
