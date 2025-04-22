const express = require("express");
const router = express.Router();

let users = []; // დროებითი მეხსიერება

// 🔹 Register
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing fields" });

  const exists = users.find(user => user.email === email);
  if (exists) return res.status(409).json({ message: "User already exists" });

  users.push({ email, password });
  console.log("Registered:", email);
  res.json({ message: "✅ Registered" });
});

// 🔹 Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: "🎉 Login successful", user });
  } else {
    res.status(401).json({ message: "❌ Invalid credentials" });
  }
});

// 🔹 Forgot Password
router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (user) {
    res.json({ message: "📨 Reset link sent to your email" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;
