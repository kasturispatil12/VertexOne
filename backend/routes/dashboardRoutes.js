const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
} = require("../controllers/dashboardController");


console.log("getDashboardStats:", getDashboardStats);

router.get("/",  getDashboardStats);

module.exports = router;