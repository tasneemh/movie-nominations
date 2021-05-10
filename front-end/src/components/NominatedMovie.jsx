import React from "react";
import axios from "axios";
function NominatedMovie(props) {
  const { movie, setNominatedMoviesArr } = props;
  const deleteMovie = () => {
    console.log("movie inside delete function", movie);
    if (movie) {
      const id = movie.id;
      axios
        .delete(`http://localhost:8080/delete/${id}`)
        .then((response) => {
          console.log("response inside axios in delete", response);
          setNominatedMoviesArr(response.data.arr);
        })
        .catch((error) => {
          console.log("error inside axios in delete: ", error);
        });
    }
  };

  return (
    <div className="nominated-movie-container">
      <p>
        {movie.movie_title} ({movie.movie_year}){" "}
      </p>
      <img src={movie.movie_poster_url} />
      <button onClick={deleteMovie} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default NominatedMovie;
