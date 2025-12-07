// frontend/src/services/salesApi.js
const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:4000"; // fallback only for local dev

export async function fetchSales(query) {
  const params = new URLSearchParams();

  if (query.search) params.set("search", query.search);
  if (query.region?.length) params.set("region", query.region.join(","));
  if (query.gender?.length) params.set("gender", query.gender.join(","));
  if (query.productCategories?.length)
    params.set("productCategories", query.productCategories.join(","));

  params.set("page", query.page ?? 1);
  params.set("pageSize", query.pageSize ?? 10);
  params.set("sortBy", query.sortBy ?? "date");
  params.set("sortOrder", query.sortOrder ?? "desc");

  const url = `${API_BASE}/api/sales?${params.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    console.error("API error:", res.status, res.statusText);
    throw new Error("Failed to fetch sales");
  }

  return res.json();
}
