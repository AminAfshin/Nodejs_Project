const path = require("path");

const express = require("express");
const indexRouter = require("./routes");

const app = express();

//* View Engines
app.set("view engine", "ejs");
app.set("views", "views");

//*Statics
app.use(express.static(path.join(__dirname, "public")));

//*Routes
app.use(indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
