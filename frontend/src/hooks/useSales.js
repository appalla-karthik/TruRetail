import { useEffect, useState } from "react";
import { fetchSales } from "../services/salesApi";

export const useSales = (query) => {
  const [data, setData] = useState({
    items: [],
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      setLoading(true);
      try {
        const res = await fetchSales(query);
        if (!ignore) setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    load();
    return () => (ignore = true);
  }, [query]);

  return { data, loading };
};
