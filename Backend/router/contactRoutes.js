const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// POST /api/contact → Save contact form data
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      role,
      companyName,
      companyWebsite,
      companySize,
      annualRevenue,
      projectBudget,
      servicesInterested,
      message
    } = req.body;

    // Basic validation
    if (!name || !email || !role || !companyName || !message) {
      return res.status(400).json({ message: "Name, email, role, company name, and message are required" });
    }

    // Save to DB
    const newContact = new Contact({
      name,
      email,
      role,
      companyName,
      companyWebsite,
      companySize,
      annualRevenue,
      projectBudget,
      servicesInterested,
      message
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: "Contact message saved successfully",
      data: savedContact
    });

  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

