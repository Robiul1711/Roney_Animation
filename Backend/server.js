// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const postRoutes = require("./router/postRoutes");
app.use("/api/posts", postRoutes);
const contactRoutes = require("./router/contactRoutes");
app.use("/api/contact", contactRoutes);
// Connect to DB and then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});