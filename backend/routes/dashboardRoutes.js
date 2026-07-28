const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
} = require("../controllers/dashboardController");



console.log("auth:", auth);
console.log("getDashboardStats:", getDashboardStats);

router.get("/", auth, getDashboardStats);

module.exports = router;