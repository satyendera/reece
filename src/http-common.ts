import axios from "axios";

let API_URL = "https://api.npoint.io/8059365002f8f54529d2";
if (typeof process !== "undefined") {
  API_URL = process?.env?.VITE_API_SERVER + process?.env?.VITE_API_PATH;
}

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
