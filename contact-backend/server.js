const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

 
app.use(cors({
  origin: "*",             
  methods: ["GET", "POST"],
}));
app.use(express.json());


app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,  
      },
    });

    transporter.verify((err, success) => {
  if (err) {
    console.error("TRANSPORT ERROR 👉", err);
  } else {
    console.log("✅ Email transporter ready");
  }
});

    await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL}>`,
  to: process.env.EMAIL,
  replyTo: email,    
  subject: `New Contact Message from ${name}`,
  text: `
Name: ${name}
Email: ${email}
Message: ${message}
  `,
});

    res.status(200).json({ success: true });
  } catch (error) {
  console.error("EMAIL ERROR MESSAGE 👉", error.message);
  console.error("FULL ERROR 👉", error);
  res.status(500).json({ success: false });
}


});

 
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
