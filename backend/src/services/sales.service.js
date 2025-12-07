// backend/src/services/sales.service.js
import { getAllSalesData } from "../utils/dataLoader.js";
import { applySearch, applyFilters, applySorting, applyPagination } from "../utils/salesUtils.js";

// backend/src/services/sales.service.js
let cachedData = null;

export const fetchSales = async (query) => {
  if (!cachedData) {
    cachedData = await getAllSalesData();
  }

  let data = [...cachedData];

  data = applySearch(data, query);
  data = applyFilters(data, query);
  data = applySorting(data, query);

  const { paginatedData, totalPages, totalItems } =
    applyPagination(data, query);

  return {
    items: paginatedData,
    totalItems,
    totalPages,
    currentPage: query.page,
  };
};
