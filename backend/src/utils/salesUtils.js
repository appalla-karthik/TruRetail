// backend/src/utils/salesUtils.js

export const applySearch = (data, { search }) => {
  if (!search) return data;
  const term = search.toLowerCase();

  return data.filter((row) => {
    const name = (row.customerName || "").toLowerCase();
    const phone = (row.phoneNumber || "").toLowerCase();
    return name.includes(term) || phone.includes(term);
  });
};

export const applyFilters = (data, query) => {
  let result = data;

  /* =============================
     CUSTOMER REGION (Multi-select)
     ============================= */
  if (query.region) {
    const regions = query.region.split(",");
    result = result.filter(
      row => row.customerRegion && regions.includes(row.customerRegion)
    );
  }

  /* =============================
     GENDER (Multi-select)
     ============================= */
  if (query.gender) {
    const genders = query.gender.split(",");
    result = result.filter(
      row => row.gender && genders.includes(row.gender)
    );
  }

  /* =============================
     AGE RANGE
     ============================= */
  const ageMin = Number(query.ageMin);
  const ageMax = Number(query.ageMax);

  if (!isNaN(ageMin)) {
    result = result.filter(row => row.age >= ageMin);
  }

  if (!isNaN(ageMax)) {
    result = result.filter(row => row.age <= ageMax);
  }

  /* =============================
     PRODUCT CATEGORY (Multi)
     ============================= */
  if (query.productCategories) {
    const categories = query.productCategories.split(",");
    result = result.filter(
      row => row.productCategory && categories.includes(row.productCategory)
    );
  }

  /* =============================
     TAGS (Multi)
     ============================= */
  if (query.tags) {
    const tagList = query.tags.split(",");
    result = result.filter(row => {
      if (!row.tags) return false;
      const rowTags = Array.isArray(row.tags)
        ? row.tags
        : row.tags.split(",");
      return tagList.some(tag => rowTags.includes(tag));
    });
  }

  /* =============================
     PAYMENT METHOD (Multi)
     ============================= */
  if (query.paymentMethods) {
    const methods = query.paymentMethods.split(",");
    result = result.filter(
      row => row.paymentMethod && methods.includes(row.paymentMethod)
    );
  }

  /* =============================
     DATE RANGE
     ============================= */
  if (query.dateFrom) {
    const from = new Date(query.dateFrom);
    result = result.filter(row => row.date >= from);
  }

  if (query.dateTo) {
    const to = new Date(query.dateTo);
    result = result.filter(row => row.date <= to);
  }

  return result;
};
    

export const applySorting = (data, { sortBy, sortOrder }) => {
  const order = sortOrder === "asc" ? 1 : -1;
  const cloned = [...data];

  cloned.sort((a, b) => {
    if (sortBy === "date") {
      return (a.date - b.date) * order * -1; // newest first
    }
    if (sortBy === "quantity") {
      return (a.quantity - b.quantity) * order;
    }
    if (sortBy === "customerName") {
      return a.customerName.localeCompare(b.customerName) * order;
    }
    return 0;
  });

  return cloned;
};

export const applyPagination = (data, { page, pageSize }) => {
  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(page, 1), totalPages);
  const start = (current - 1) * pageSize;
  const end = start + pageSize;

  return {
    paginatedData: data.slice(start, end),
    totalItems,
    totalPages,
  };
};
