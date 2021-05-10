DROP TABLE IF EXISTS nominated_movies CASCADE;

CREATE TABLE nominated_movies(
  id SERIAL PRIMARY KEY NOT NULL,
  movie_title VARCHAR(255) NOT NULL,
  movie_year SMALLINT NOT NULL,
  movie_imdb_id VARCHAR(255) NOT NULL,
  movie_poster_url VARCHAR(255) NOT NULL
);
