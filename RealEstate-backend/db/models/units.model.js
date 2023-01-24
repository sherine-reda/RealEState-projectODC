const mongoose = require("mongoose");
const unitSchema = mongoose.Schema({
  unitNumber: { type: Number },
  floorNmuber: { type: Number },
  price: { type: Number },
  addressUnit: { type: String },
  status: { type: String },
  image: { type: String },
  payment: { type: mongoose.Schema.Types.ObjectId },
});
const unit = mongoose.model("unit", unitSchema);
module.exports = unit;
