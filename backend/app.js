const express = require("express");
const cors = require("cors");
const dashboardRoutes = require("./routes/dashboardRoutes");
const componentRoutes = require("./routes/componentRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const faqRoutes = require("./routes/faqRoutes");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/faqs", faqRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "VertexOne Backend Running",
  });
});

app.use("/api/components", componentRoutes);
app.use("/api/services", serviceRoutes);

module.exports = app;