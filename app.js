const express = require("express");
const cors = require("cors");
const path = require("path");
const replaceCollection = require("./src/scraper/service.js");
const cardRouter = require("./src/routers/cardRouter");

require("./src/db/mongoose");

const port = process.env.PORT || 9000;
const publicPath = path.join(__dirname, "client/build");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/cards", cardRouter); //user router
app.use(express.static(publicPath));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

// replaceCollection();
