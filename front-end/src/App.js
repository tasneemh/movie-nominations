import "./App.css";
import { useState } from "react";

import axios from "axios";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
require("dotenv").config();

function App() {
  const [input, setInput] = useState("");
  const [moviesArr, setMoviesArr] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const key = process.env.REACT_APP_API_KEY;

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  const findMovies = () => {
    const url = `http://www.omdbapi.com/?s=${input}&page=1&apikey=${key}`;

    axios
      .get(url)
      .then((response) => {
        console.log("response: ", response);
        console.log("response.data.Search: ", response.data.Search);
        const arr = response.data.Search;
        if (arr) {
          setMoviesArr(arr);
        } else {
          setMessage("Please refine your search");
          clearMessage();
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <div className="app">
      <SearchForm input={input} setInput={setInput} findMovies={findMovies} />
      {message && <h4>{message}</h4>}
      <div className="body-container">
        <Results moviesArr={moviesArr} />
        <Nominations
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </div>
  );
}

export default App;
