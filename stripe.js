// Mock serverless function for Stripe payment processing
   module.exports = async (req, res) => {
     // Requires Stripe API key in production
     res.json({ sessionId: "mock-session-id" });
   };