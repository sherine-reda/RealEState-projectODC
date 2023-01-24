const mongoose = require("mongoose");
const paymentSchema = mongoose.Schema({
 employee:{type:String},
 customer:{type:String},
 paymentMethod:{type:String},
 numberOfyears:{type:Number},
 paid:{type:Number},
 invoice:{type:Array}
});
const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;
