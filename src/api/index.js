import { localStorageKey } from "../utils/constants";
import history from "store/utils";
const API_URL = "http://localhost:5000/v1";
export function http(endpoint, { body, token, ...customConfig } = {}) {
  // const storage = window.localStorage.getItem(localStorageKey) || {};

  // const { access: { token = null } = {} } = storage ? {} : {};
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return window
    .fetch(`${API_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        // persistor.purge();
        console.log("history", history);
        history?.replace("/login");
      }
      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });
}
export function logout() {
  window.localStorage.removeItem(localStorageKey);
}
