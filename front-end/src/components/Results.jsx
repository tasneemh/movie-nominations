import React, { useEffect } from "react";
import Movie from "./Movie";

function Results(props) {
  const {
    moviesArr,
    setMoviesArr,
    resultArr,
    selectedMovie,
    setSelectedMovie,
    nominatedMoviesArr,
    setNominatedMoviesArr,
  } = props;
  console.log("resultArr: ", resultArr);
  const findMovies = () => {
    const arr = [];
    resultArr.filter((result) => {
      if (result.Type === "movie") {
        arr.push(result);
      }
    });
    setMoviesArr(arr);
  };

  useEffect(() => {
    findMovies();
  }, [resultArr]);

  return (
    <div className="results-container">
      <h4>Results: </h4>
      {moviesArr &&
        moviesArr.map((movie) => (
          <Movie
            movie={movie}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            nominatedMoviesArr={nominatedMoviesArr}
            setNominatedMoviesArr={setNominatedMoviesArr}
          />
        ))}
    </div>
  );
}

export default Results;
