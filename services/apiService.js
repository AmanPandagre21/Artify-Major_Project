import axios from "axios";

const api = axios.create({
  baseURL: "https://artify-backend.onrender.com/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
// api.defaults.headers.common["Authorization"] = AUTH_TOKEN;
