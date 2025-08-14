const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },              // What is your name?
  email: { type: String, required: true },             // Your Email
  role: { type: String, required: true },              // Your role in the company
  companyName: { type: String, required: true },       // Company Name
  companyWebsite: { type: String },                    // Company Website
  companySize: { type: String },                       // Company Size
  annualRevenue: { type: String },                     // Company's Annual Revenue
  projectBudget: { type: String },                     // Project Budget
  servicesInterested: { type: [String] },              // What services are you interested in?
  message: { type: String, required: true },           // Message
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

