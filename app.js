const express = require("express");
const cors = require("cors");
const path = require("path");
require("./src/db/mongoose");
const app = express();
app.use(cors());
const userRouter = require("./src/routers/userRouter");
app.use(express.json());
app.use("", userRouter); //user router

const port = process.env.PORT || 9000;

const publicPath = path.join(__dirname, "client/build");

app.use(express.static(publicPath));

app.get("/users", (req, res) => {});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
