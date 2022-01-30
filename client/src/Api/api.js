import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:9000";
}
if (process.env.NODE_ENV === "production") {
  baseURL = "";
}

const cardsAPI = axios.create({
  baseURL,
});

export default cardsAPI;
