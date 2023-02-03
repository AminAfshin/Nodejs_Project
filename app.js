const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");

const indexRouter = require("./routes");

const app = express();

//* load config
dotEnv.config({ path: ".config/config.env" });

//* View Engines
app.set("view engine", "ejs");
app.set("views", "views");

//*Statics
app.use(express.static(path.join(__dirname, "public")));

//*Routes
app.use(indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
