const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");
const morgan = require("morgan");

const indexRouter = require("./routes");
const connectDB = require("./config/db");

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//* load config
dotEnv.config({ path: "./config/config.env" });

//* database connection
connectDB();

//* View Engines
app.set("view engine", "ejs");
app.set("views", "views");

//*Statics
app.use(express.static(path.join(__dirname, "public")));

//*Routes
app.use(indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
