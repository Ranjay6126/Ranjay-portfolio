import { useEffect, useState } from "react";
import { api } from "../services/api";

const CACHE_KEY = "portfolio_cache_v5";
const CACHE_TTL = 5 * 60 * 1000;

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let hasFreshCache = false;

    try {
      // Render cached content immediately, then refresh it in the background.
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          hasFreshCache = true;
          if (!cancelled) setPortfolio(parsed.data);
        }
      }
    } catch {}

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
        if (!hasFreshCache) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { portfolio, error };
}
