// src/App.jsx
import { useState } from "react";
import { useSales } from "./hooks/useSales";

import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import SortDropdown from "./components/SortDropdown";
import SummaryCards from "./components/SummaryCards";
import SalesTable from "./components/SalesTable";
import PaginationControls from "./components/PaginationControls";

function App() {
  /* =====================================================
     QUERY STATE (single source of truth)
     ===================================================== */
  const [query, setQuery] = useState({
    search: "",
    region: [],
    gender: [],
    productCategories: [],
    page: 1,
    pageSize: 10,
    sortBy: "date",
    sortOrder: "desc",
  });

  /* =====================================================
     DATA FETCHING
     ===================================================== */
  const { data, loading } = useSales(query);

  const items = data?.items ?? [];
  const totalPages = data?.totalPages ?? 1;
  const hasResults = items.length > 0;

  /* =====================================================
     PAGE
     ===================================================== */
  return (
    <main className="app-root">
      <div className="app-shell">
        {/* ================= HEADER ================= */}
        <header className="app-header">
          <div className="header-left">
            <h1 className="app-title">Sales Management System</h1>
            <p className="app-subtitle">
              Track sales, customers, and performance at scale
            </p>
          </div>

          <div className="header-right">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
        </header>

        {/* ================= CONTROLS ================= */}
        <section className="controls-bar">
          <FilterBar query={query} setQuery={setQuery} />
          <SortDropdown query={query} setQuery={setQuery} />
        </section>

        {/* ================= SUMMARY ================= */}
        {hasResults && !loading && (
          <section className="summary-section">
            <SummaryCards items={items} />
          </section>
        )}

        {/* ================= TABLE ================= */}
        <section className="table-section">
          <SalesTable items={items} loading={loading} />

          {!loading && totalPages > 1 && (
            <PaginationControls
              currentPage={query.page}
              totalPages={totalPages}
              onPageChange={(page) =>
                setQuery((prev) => ({
                  ...prev,
                  page,
                }))
              }
            />
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
