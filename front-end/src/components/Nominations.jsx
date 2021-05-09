import React from "react";

function Nominations(props) {
  const { selectedMovie } = props;
  console.log("selectedMovie inside nominations: ", selectedMovie);

  return (
    <div className="nominations-container">
      <p>{selectedMovie.Title}</p>
    </div>
  );
}

export default Nominations;
