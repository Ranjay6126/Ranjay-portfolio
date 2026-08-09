const API_BASE = import.meta.env.VITE_API_URL || "/api";
// Reuse the request when several sections mount at the same time.
let portfolioRequest = null;

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = { message: "Invalid server response. Please try again later." };
  }

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const api = {
  getPortfolio: () => {
    if (!portfolioRequest) {
      portfolioRequest = request("/portfolio").finally(() => {
        portfolioRequest = null;
      });
    }

    return portfolioRequest;
  },
  sendContact: (body) =>
    request("/contact", { method: "POST", body: JSON.stringify(body) }),
};
