import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie, index) => (
        <Movie movie={movie} key={index} />
      ))}
    </div>
  );
};

export default Movies;
