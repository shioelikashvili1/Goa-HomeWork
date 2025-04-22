const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  console.log("📥 Registered:", email);
  res.json({ message: "✅ Registered successfully" });
});

module.exports = router;
