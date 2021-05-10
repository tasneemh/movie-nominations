import React from "react";
import NominatedMovie from "./NominatedMovie";

function Nominations(props) {
  const {
    selectedMovie,
    isNominated,
    nominatedMoviesArr,
    setNominatedMoviesArr,
  } = props;
  //console.log("isNominated: ", isNominated);
  console.log(
    "nominatedMoviesArr inside nominations component",
    nominatedMoviesArr
  );
  console.log("selectedMovie inside nominations component", selectedMovie);

  return (
    <div className="nominations-container">
      <h4>Nominations: </h4>
      {nominatedMoviesArr &&
        nominatedMoviesArr.map((movie) => (
          <NominatedMovie
            movie={movie}
            key={movie.imdbID}
            setNominatedMoviesArr={setNominatedMoviesArr}
          />
        ))}
    </div>
  );
}

export default Nominations;
