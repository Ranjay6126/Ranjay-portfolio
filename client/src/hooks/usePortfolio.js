import { useEffect, useState } from "react";
import { api } from "../services/api";

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);
  const [isPortfolioLoading, setIsPortfolioLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api
      .getPortfolio()
      .then((res) => {
        if (cancelled) return;
        setPortfolio(res.data);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setPortfolio(null);
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) {
          setIsPortfolioLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { portfolio, error, isPortfolioLoading };
}
