import React from "react";

function SearchForm(props) {
  const { input, setInput, getResult } = props;
  const handleSubmit = (event) => {
    console.log("event.target.value: ", event.target.value);
    setInput(event.target.value);
    getResult();
  };
  return (
    <div>
      <form className="form">
        <div className="form-group">
          <label>Search Movie Title</label>
          <input type="text" className="form-input" onChange={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
