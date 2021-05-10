module.exports = (pool) => {
  const addMovie = (movie) => {
    const { Title, Year, imdbID, Poster } = movie;
    return pool
      .query(`SELECT * FROM nominated_movies WHERE movie_imdb_id=$1;`, [imdbID])
      .then((res) => {
        console.log(res.rows[0]);
        if (!res.rows[0]) {
          return pool
            .query(
              `INSERT INTO nominated_movies (movie_title, movie_year, movie_imdb_id, movie_poster_url)
              VALUES($1, $2, $3, $4) RETURNING *;`,
              [Title, Year, imdbID, Poster]
            )
            .then((response) => {
              console.log("response inside index.js: ", response);
              return pool
                .query(`SELECT * FROM nominated_movies;`)
                .then((data) => {
                  console.log("data inside index: ", data.rows);
                  return data.rows;
                })
                .catch((error) => {
                  console.log("error: ", error);
                  return error;
                });
            })
            .catch((error) => {
              console.log("error: ", error);
            });
        } else {
          return pool
            .query(`SELECT * FROM nominated_movies;`)
            .then((data) => {
              console.log("data inside index: ", data.rows);
              return data.rows;
            })
            .catch((error) => {
              console.log("error: ", error);
              return error;
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteMovie = (id) => {
    return pool
      .query(`DELETE FROM nominated_movies WHERE id = $1;`, [id])
      .then((response) => {
        console.log("response.rows: ", response.rows);
        return pool
          .query(`SELECT * FROM nominated_movies;`)
          .then((data) => {
            console.log("data.rows: ", data.rows);
            return data.rows;
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      })
      .catch((error) => {
        console.log("error: ", error);
        return error;
      });
  };
  return { addMovie, deleteMovie };
};
