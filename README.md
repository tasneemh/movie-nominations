### MOVIE NOMINATIONS

This is a full stack web application where users can search for movies and are able to nominate their favorite movies. At the same time they can delet any movie from their nomination list.

## Screenshots

!["Screenshot of home page"](https://github.com/tasneemh/movie-nominations/blob/master/screenshots/home.png?raw=true)
!["Screenshot of searches1"](https://github.com/tasneemh/movie-nominations/blob/master/screenshots/searches.png?raw=true)
!["Screenshot of searches2"](https://github.com/tasneemh/movie-nominations/blob/master/screenshots/searches2.png?raw=true)
!["Screenshot of nominate"](https://github.com/tasneemh/movie-nominations/blob/master/screenshots/nominate.png?raw=true)

# Dependencies

- React (17.0.2)
- CSS
- Node.js (10.16.1)
- Bootstrap
- Express (4.17.1)
- pg (8.6.0)
- Axios (0.21.1)
- Nodemon (2.0.7)
- Cors (2.8.5)

# Technology

This full stack web application is built by using React and CSS on front-end, Express, Node.js and Postgre SQL on the back-end.

# Getting Started

- Install all dependencies (using the npm install command).
- My laptop has vagrant and virtual machine preinstalled. The database has been created inside vagrant.

  - Commands for vagrant in the terminal on Mac OS.
  - vagrant up
  - vagrant ssh
  - psql -U development
  - CREATE DATABASE nominations_db
  - \c nominations_db to connect to the database
  - Run command \i back-end/sqlDatabase/migrations/create.sql to create images table
  - \dt to check if the images table is created
  - All the username and password details about the database are available in db.js inside back-end folder.

- Start the back-end server using the npm start command. The app will be served at http://localhost:8080/.
- Start the front-end server using the npm start command. The app will be served at http://localhost:3000/

# How To Use the App?

- Users can search for the movies in the search bar.
- They can nominate for movies by clicking on 'Nominate' button.
- Users can also delete any movie from the nominations list by clicking on 'Delete' button.
