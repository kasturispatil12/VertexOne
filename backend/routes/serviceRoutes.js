const express = require("express");

const router = express.Router();


const {
  getServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

console.log("createService:", createService);
// Public Route
router.get("/", getServices);

// Protected Routes
router.post("/",  createService);

router.put("/:id", updateService);

router.delete("/:id",  deleteService);

module.exports = router;