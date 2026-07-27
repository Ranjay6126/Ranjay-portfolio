import { useEffect, useState } from "react";
import { api } from "../services/api";

const CACHE_KEY = "portfolio_cache_v3";
const CACHE_TTL = 5 * 60 * 1000;

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          if (!cancelled) {
            setPortfolio(parsed.data);
            setLoading(false);
          }
        }
      }
    } catch (_) {}

    api
      .getPortfolio()
      .then((res) => {
        if (cancelled) return;
        setPortfolio(res.data);
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: res.data })
          );
        } catch (_) {}
      })
      .catch((err) => {
        if (cancelled) return;
        setPortfolio((prev) => prev || null);
        if (!portfolio) setError(err.message);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { portfolio, loading, error };
}
