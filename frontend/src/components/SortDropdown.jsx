const SortDropdown = ({ query, setQuery }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    let sortBy = "date";
    let sortOrder = "desc";

    switch (value) {
      case "quantity-desc":
        sortBy = "quantity";
        sortOrder = "desc";
        break;

      case "name-asc":
        sortBy = "customerName";
        sortOrder = "asc";
        break;

      default:
        sortBy = "date";
        sortOrder = "desc";
    }

    setQuery((prev) => ({
      ...prev,
      sortBy,
      sortOrder,
      page: 1,
    }));
  };

  const selectedValue =
    query.sortBy === "quantity"
      ? "quantity-desc"
      : query.sortBy === "customerName"
      ? "name-asc"
      : "date-desc";

  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Sort by</label>
      <select
        id="sort-select"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="date-desc">Date (Newest First)</option>
        <option value="quantity-desc">Quantity (High → Low)</option>
        <option value="name-asc">Customer Name (A → Z)</option>
      </select>
    </div>
  );
};

export default SortDropdown;
