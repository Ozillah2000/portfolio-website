import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// POST route for contact form
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📩 New Contact Form Submission:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  // TODO: Here you can add nodemailer or save to MongoDB
  res.json({ success: true, message: "Message received!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
