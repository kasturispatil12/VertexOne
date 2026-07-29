const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  getComponents,
  getComponentById,
  createComponent,
  updateComponent,
  deleteComponent,
} = require("../controllers/componentController");

console.log("createComponent:", createComponent);
console.log("updateComponent:", updateComponent);
console.log("deleteComponent:", deleteComponent);


// Public Routes
router.get("/", getComponents);
router.get("/:id", getComponentById);

// Protected Routes
router.post(
  "/",
  upload.single("image"),
  createComponent
);

router.put(
  "/:id",
  upload.single("image"),
  updateComponent
);

router.delete(
  "/:id",
  deleteComponent
);

module.exports = router;