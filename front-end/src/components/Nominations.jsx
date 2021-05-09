import React from "react";

function Nominations(props) {
  const { selectedMovie } = props;
  console.log("selectedMovie inside nominations: ", selectedMovie);

  return <div className="nominations-container">Nominations container</div>;
}

export default Nominations;
