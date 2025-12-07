const BASE_URL = "http://localhost:4000";

export const fetchSales = async (query) => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value === "" || value == null) return;
    if (Array.isArray(value) && value.length === 0) return;

    if (Array.isArray(value)) {
      params.set(key, value.join(","));
    } else {
      params.set(key, value);
    }
  });

  const res = await fetch(`${BASE_URL}/api/sales?${params.toString()}`);

  if (!res.ok) throw new Error("Failed to fetch sales");

  return res.json();
};
