import React from "react";

function Movie(props) {
  const { movie, setSelectedMovie } = props;
  console.log("movie: ", movie);
  const nominateMovie = () => {
    setSelectedMovie(movie);
  };
  return (
    <div className="">
      <p>Movie: {movie.Title}</p>
      <label>Year: {movie.Year}</label>
      <button onClick={nominateMovie}>Nominate</button>
    </div>
  );
}

export default Movie;
