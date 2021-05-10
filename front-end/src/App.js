import "./App.css";
import { useState } from "react";

import axios from "axios";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
require("dotenv").config();

function App() {
  const [input, setInput] = useState("");
  const [resultArr, setResultArr] = useState([]);
  const [moviesArr, setMoviesArr] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const [nominatedMoviesArr, setNominatedMoviesArr] = useState([]);

  const key = process.env.REACT_APP_API_KEY;

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  const getResult = () => {
    const url = `http://www.omdbapi.com/?s=${input}&page=1&apikey=${key}`;

    axios
      .get(url)
      .then((response) => {
        console.log("response: ", response);
        console.log("response.data.Search: ", response.data.Search);
        const arr = response.data.Search;
        if (arr) {
          setResultArr(arr);
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
      <SearchForm input={input} setInput={setInput} getResult={getResult} />
      {message && <h4>{message}</h4>}
      <div className="body-container">
        <Results
          resultArr={resultArr}
          moviesArr={moviesArr}
          setMoviesArr={setMoviesArr}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          nominatedMoviesArr={nominatedMoviesArr}
          setNominatedMoviesArr={setNominatedMoviesArr}
        />
        <Nominations
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          nominatedMoviesArr={nominatedMoviesArr}
          setNominatedMoviesArr={setNominatedMoviesArr}
        />
      </div>
    </div>
  );
}

export default App;
