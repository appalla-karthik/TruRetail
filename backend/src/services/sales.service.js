// backend/src/services/sales.service.js
import { getAllSalesData } from "../utils/dataLoader.js";
import { applySearch, applyFilters, applySorting, applyPagination } from "../utils/salesUtils.js";

export const fetchSales = async (query) => {
  const allData = await getAllSalesData();
  let filteredData = [...allData];

  filteredData = applySearch(filteredData, query);
  filteredData = applyFilters(filteredData, query);
  filteredData = applySorting(filteredData, query);

  const { paginatedData, totalPages, totalItems } =
    applyPagination(filteredData, query);

  return {
    items: paginatedData,
    totalItems,
    totalPages,
    currentPage: query.page,
  };
};
