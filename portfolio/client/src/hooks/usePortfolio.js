import { useEffect, useState } from "react";
import { api } from "../services/api";

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getPortfolio()
      .then((res) => setPortfolio(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { portfolio, loading, error };
}
