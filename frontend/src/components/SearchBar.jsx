const SearchBar = ({ query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery((prev) => ({
      ...prev,
      page: 1, // reset pagination on search
    }));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Search customers"
        placeholder="Search customer name or phone"
        value={query.search}
        onChange={(e) =>
          setQuery((prev) => ({
            ...prev,
            search: e.target.value,
          }))
        }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
