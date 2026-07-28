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
router.post("/", auth, createService);

router.put("/:id", auth, updateService);

router.delete("/:id", auth, deleteService);

module.exports = router;