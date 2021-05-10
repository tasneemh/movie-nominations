//importing dependencies
const express = require("express");
const cors = require("cors");
const pool = require("../back-end/sqlDatabase/db");
const sqlDbHelpers = require("../back-end/sqlDatabase/dbHelpers/index")(pool);

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/nominate", (request, response) => {
  console.log("request.body: ", request.body);
  const movie = request.body.movie;
  console.log("movie: ", movie);
  if (movie) {
    sqlDbHelpers
      .addMovie(movie)
      .then((data) => {
        console.log("data inside server", data);
        response.send({ arr: data });
      })
      .catch((error) => {
        console.log("error inside server: ", error);
        response.send("Error while retrieving data");
      });
  }
});
app.delete("/delete/:id", (request, response) => {
  console.log("request.params.id: ", request.params.id);
  const id = request.params.id;
  if (id) {
    sqlDbHelpers
      .deleteMovie(id)
      .then((data) => {
        console.log("data inside server: ", data);
        response.send({ arr: data });
      })
      .catch((error) => {
        console.log(error);
        response.send("Error while deleting the movie!");
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
