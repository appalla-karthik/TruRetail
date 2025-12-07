// frontend/src/hooks/useSales.js
import { useEffect, useState } from "react";
import { fetchSales } from "../services/salesApi";

export function useSales(query) {
  const [data, setData] = useState({ items: [], totalPages: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const result = await fetchSales(query);
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        console.error("Failed to load sales:", err);
        if (!cancelled) {
          setData({ items: [], totalPages: 1 });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(query)]); // simple dependency

  return { data, loading };
}
