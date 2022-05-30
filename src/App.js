import { useState } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";

function App() {
  const [movie, setMovie] = useState("");

  const getMovie = async (updText) => {
    const title = await updText.replace(/ /g, "+");
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=40c85a03&s=${title}`
    );
    const data = await res.json();
    setMovie(data);
    return data;
  };

  return (
    <div className="container">
      <Search getMovie={getMovie} />
      {movie.Search ? <Movies movies={movie.Search} /> : <h2>{movie.Error}</h2>}
    </div>
  );
}

export default App;
