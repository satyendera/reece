import axios from "axios";

const API_URL = import.meta.env.VITE_API_SERVER + import.meta.env.VITE_API_PATH;
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
