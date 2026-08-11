import { useEffect, useState } from "react";
import { api } from "../services/api";

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    api
      .getPortfolio()
      .then((res) => {
        if (cancelled) return;
        setPortfolio(res.data);
      })
      .catch((err) => {
        if (cancelled) return;
        setPortfolio(null);
        setError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { portfolio, error };
}
