import poster from "../assets/poster.jpg";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h3>Title:</h3>
      <p>{movie.Title}</p>
      <h3>Year of Release:</h3>
      <p>{movie.Year}</p>
      <img
        className="poster"
        src={movie.Poster === "N/A" ? poster : movie.Poster}
        alt={
          movie.Poster === "N/A" ? "Movie Poster not Available" : "Movie Poster"
        }
      />
    </div>
  );
};

export default Movie;
