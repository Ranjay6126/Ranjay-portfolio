const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const api = {
  getPortfolio: () => request("/portfolio"),
  sendContact: (body) =>
    request("/contact", { method: "POST", body: JSON.stringify(body) }),
  sendChat: (body) =>
    request("/chat", { method: "POST", body: JSON.stringify(body) }),
};
