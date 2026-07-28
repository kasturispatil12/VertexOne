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

console.log("auth:", auth);
console.log("createComponent:", createComponent);
console.log("updateComponent:", updateComponent);
console.log("deleteComponent:", deleteComponent);


// Public Routes
router.get("/", getComponents);
router.get("/:id", getComponentById);

// Protected Routes
router.post(
  "/",
  auth,
  upload.single("image"),
  createComponent
);

router.put(
  "/:id",
  auth,
  upload.single("image"),
  updateComponent
);

router.delete(
  "/:id",
  auth,
  deleteComponent
);

module.exports = router;