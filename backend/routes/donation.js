const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");
const authMiddleware = require("../middleware/authMiddleware");

// Get user donations
router.get("/", authMiddleware, async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user.id });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;