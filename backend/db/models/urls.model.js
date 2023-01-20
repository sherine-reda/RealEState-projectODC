const mongoose = require("mongoose");
const urlsSchema = mongoose.Schema({
  link: { type: String },
  methods: { type: String },
  params: { type: Array },
  //query
  Roles: [
    {
      roleId: { type: mongoose.Schema.Types.ObjectId },
      //  required: true,
      //  ref:"Role"
    },
  ],
});
const Url = mongoose.model("Url", urlsSchema);
module.exports = Url;
