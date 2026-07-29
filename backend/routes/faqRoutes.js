const express = require("express");

const router = express.Router();


const {
  getFAQs,
  createFAQ,
  updateFAQ,
  deleteFAQ,
} = require("../controllers/faqController");

console.log("createFAQ:", createFAQ);

// Public Route
router.get("/", getFAQs);

// Protected Routes
router.post("/", createFAQ);

router.put("/:id",  updateFAQ);

router.delete("/:id",  deleteFAQ);

module.exports = router;