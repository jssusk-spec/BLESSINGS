// Mock serverless function for sending thank-you emails via SendGrid
module.exports = async (req, res) => {
  // Requires SendGrid API key in production
  res.json({ message: "Thank you email sent!" });
};