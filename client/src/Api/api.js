let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:9000";
}
if (process.env.NODE_ENV === "production") {
  baseURL = "";
}

export default baseURL;
