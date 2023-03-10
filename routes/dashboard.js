const { Router } = require("express");

const router = new Router();

// @desc Dashboard
// @desc GET /dashboard

router.get("/", (req, res) => {
  res.render("dashboard", {
    pageTitle: "بخش مدیریت | داشبورد",
    path: "/dashboard",
    layout: "./layouts/dashLayout",
  });
});

// @desc  Login Route
// @desc  GET /dashboard/login
router.get("/login", (req, res) => {
  res.render("login", { pageTitle: "ورود به بخش مدیریت", path: "/login" });
});

module.exports = router;
