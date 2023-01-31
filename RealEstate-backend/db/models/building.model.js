const mongoose = require("mongoose")
const buildingSchema = mongoose.Schema({
    buildingNumber:{type:String},
    floorNumber:{type:Number},
    units:[{type:mongoose.Schema.Types.ObjectId,ref:"unit"}],
    image:{type:String}
})
const building = mongoose.model("building", buildingSchema)
module.exports=building