const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

require("../db/connect");
app.use(express.json());
app.use(express.static(path.join(__dirname, "../uploads")))
const userRoutes = require("../routes/user.routes");
const roleRoutes = require("../routes/role.route");
const urlRoutes = require("../routes/urls.routes");
const projectRoutes = require("../routes/project.route");
const buildingRoutes = require("../routes/building.route");
const unitRoutes = require("../routes/unit.route");
const paymentRoutes = require("../routes/payment.route");

app.use(cors());
app.use("/api/user/", userRoutes);
app.use("/api/role/", roleRoutes);
app.use("/api/url/", urlRoutes);
app.use("/api/project/", projectRoutes);
app.use("/api/building/", buildingRoutes);
app.use("/api/unit/", unitRoutes);
app.use("/api/payment/", paymentRoutes);

app.all("*", (req, res) => {
  res.status(404).send({
    apisStatus: false,
    message: "Invalid URL",
    data: {},
  });
});
module.exports = app;
