const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login:", email, password);
  res.json({ message: "Login successful" });
});

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  console.log("Register:", email, password);
  res.json({ message: "Registered successfully" });
});

app.post("/api/forgot-password", (req, res) => {
  const { email } = req.body;
  console.log("Forgot Password:", email);
  res.json({ message: "Reset link sent" });
});

app.post("/api/reset-password", (req, res) => {
  const { token, newPassword } = req.body;
  console.log("Reset Password:", token, newPassword);
  res.json({ message: "Password reset successful" });
});

app.listen(5000, () => console.log("Server started on port 5000"));
