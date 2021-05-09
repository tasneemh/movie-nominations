import React from "react";

function Movie(props) {
  const { movie, selectedMovie, setSelectedMovie } = props;
  console.log("movie: ", movie);
  const nominateMovie = () => {
    //console.log("Yay");
    setSelectedMovie(movie);
  };
  return (
    <div className="movie-container">
      <p>Movie: {movie.Title}</p>
      <label>Year: {movie.Year}</label>
      <img src={movie.Poster} />
      <button onClick={nominateMovie}>Nominate</button>
    </div>
  );
}

export default Movie;
