import React from "react";

function SearchForm(props) {
  const { input, setInput, findMovies } = props;
  const handleSubmit = (event) => {
    console.log("event.target.value: ", event.target.value);
    setInput(event.target.value);
    findMovies();
  };
  return (
    <div>
      <form>
        <input type="text" onChange={handleSubmit} />
      </form>
    </div>
  );
}

export default SearchForm;
