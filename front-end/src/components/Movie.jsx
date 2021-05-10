import React, { useState } from "react";
import axios from "axios";

function Movie(props) {
  const [isNominated, setIsNominated] = useState(false);
  const {
    movie,
    selectedMovie,
    setSelectedMovie,
    nominatedMoviesArr,
    setNominatedMoviesArr,
  } = props;
  console.log("movie: ", movie);
  const nominateMovie = () => {
    //console.log("Yay");
    // setSelectedMovie(movie);
    // if (!isNominated) {
    //   setIsNominated(!isNominated);
    //   const arr = [];
    //   arr.push(movie);
    //   setNominatedMoviesArr(arr);
    //   setIsNominated(!isNominated);
    // }

    axios
      .post("http://localhost:8080/nominate", { movie })
      .then((response) => {
        console.log("response inside axios: ", response);
        setNominatedMoviesArr(response.data.arr);
      })
      .catch((error) => {
        console.log("error inside axios: ", error);
      });
  };
  return (
    <div className="movie-container">
      <p>
        {movie.Title} ({movie.Year})
      </p>

      <img src={movie.Poster} />
      <button
        disabled={isNominated}
        onClick={nominateMovie}
        className="btn btn-info"
      >
        Nominate
      </button>
    </div>
  );
}

export default Movie;
