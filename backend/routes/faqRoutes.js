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
router.post("/", auth, createFAQ);

router.put("/:id", auth, updateFAQ);

router.delete("/:id", auth, deleteFAQ);

module.exports = router;