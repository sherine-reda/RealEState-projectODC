const mongoose = require("mongoose");
const unitSchema = mongoose.Schema({
  unitName: { type: String },
  floorNmuber: { type: Number },
  price: { type: Number },
  addressUnit: { type: String },
  status: { type: String },
  payment:{ type:mongoose.Schema.Types.ObjectId}
});
const unit = mongoose.model("unit", unitSchema);
module.exports = unit;
