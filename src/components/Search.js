const Search = ({ getMovie }) => {
  return (
    <div className="form-control">
      <label>Search for Movies</label>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        // value={text}
        onChange={(e) => getMovie(e.target.value)}
      />
    </div>
  );
};

export default Search;
