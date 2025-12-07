const regions = ["North", "South", "East", "West", "Central"];
const genders = ["Male", "Female"];
const categories = ["Beauty", "Electronics", "Clothing"];

const FilterBar = ({ query, setQuery }) => {
  const toggleValue = (key, value) => {
    setQuery((prev) => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      return {
        ...prev,
        [key]: updated,
        page: 1,
      };
    });
  };

  const clearFilters = () => {
    setQuery((prev) => ({
      ...prev,
      search: "",
      region: [],
      gender: [],
      productCategories: [],
      page: 1,
    }));
  };

  return (
    <div className="filter-groups">
      {/* REGION */}
      <div className="filter-group">
        <strong>Region</strong>
        {regions.map((region) => (
          <label key={region} className="filter-pill">
            <input
              type="checkbox"
              checked={query.region.includes(region)}
              onChange={() => toggleValue("region", region)}
            />
            {region}
          </label>
        ))}
      </div>

      {/* GENDER */}
      <div className="filter-group">
        <strong>Gender</strong>
        {genders.map((gender) => (
          <label key={gender} className="filter-pill">
            <input
              type="checkbox"
              checked={query.gender.includes(gender)}
              onChange={() => toggleValue("gender", gender)}
            />
            {gender}
          </label>
        ))}
      </div>

      {/* CATEGORY */}
      <div className="filter-group">
        <strong>Category</strong>
        {categories.map((category) => (
          <label key={category} className="filter-pill">
            <input
              type="checkbox"
              checked={query.productCategories.includes(category)}
              onChange={() => toggleValue("productCategories", category)}
            />
            {category}
          </label>
        ))}
      </div>

      {/* CLEAR */}
      <button
        className="clear-filters"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
