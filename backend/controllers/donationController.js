const Donation = require("../models/Donation");

// Create donation
exports.createDonation = async (req, res) => {
  const { item, quantity } = req.body;

  try {
    const donation = new Donation({
      user: req.user.id,
      item,
      quantity,
    });
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user donations
exports.getUserDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user.id });
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};