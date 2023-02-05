const path = require("path");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotEnv = require("dotenv");
const morgan = require("morgan");

const blogRouter = require("./routes/blog");
const connectDB = require("./config/db");
const dashRouter = require("./routes/dashboard");

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
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");

//*Statics
app.use(express.static(path.join(__dirname, "public")));

//*Routes
app.use("/dashboard", dashRouter);
app.use(blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
