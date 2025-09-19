import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route (optional)
app.get("/", (req, res) => {
  res.send("✅ Portfolio Backend is Running!");
});

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  console.log("📩 New message:", req.body);

  // For now just respond OK
  res.json({ success: true, message: "Message received!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
