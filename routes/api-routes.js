const router = require("express").Router();
const Todo = require("../models/todo");
const axios = require("axios").default;
const path = require("path");

router.get("/login", function (req, res) {
  // If the user already has an account send them to the members page

  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/landing", (req, res) => {
  if (req.todo) {
    res.redirect("/landing-page");
  }
  res.sendFile(path.join(__dirname, "../public/landing-page.html"));
});

module.exports = router;
