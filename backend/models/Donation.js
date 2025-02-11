const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", donationSchema);