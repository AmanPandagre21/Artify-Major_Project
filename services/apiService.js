import axios from "axios";

const api = axios.create({
  baseURL:
    "https://artify-major-project-backend-production.up.railway.app/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
// api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
