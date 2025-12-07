// backend/src/controllers/sales.controller.js
import { fetchSales } from "../services/sales.service.js";

// backend/src/controllers/sales.controller.js
export const getSales = async (req, res) => {
  try {
    const query = {
      search: req.query.search || "",
      region: req.query.region || "",
      gender: req.query.gender || "",
      ageMin: req.query.ageMin,
      ageMax: req.query.ageMax,
      productCategories: req.query.productCategories || "",
      tags: req.query.tags || "",
      paymentMethods: req.query.paymentMethods || "",
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo,
      sortBy: req.query.sortBy || "date",
      sortOrder: req.query.sortOrder || "desc",
      page: Number(req.query.page) || 1,
      pageSize: Number(req.query.pageSize) || 10,
    };

    const result = await fetchSales(query);
    res.json(result);
  } catch (err) {
    console.error("Sales fetch error:", err);
    res.status(500).json({ message: err.message });
  }
};
