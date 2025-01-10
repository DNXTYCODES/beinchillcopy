import { auth } from "express-oauth2-jwt-bearer";
import axios from "axios";
import express from "express";

// Auth0 credentials from environment variables
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const audience = process.env.AUTH0_AUDIENCE;
const tokenUrl = process.env.AUTH0_TOKEN_URL;
const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;

// Validate environment variables
if (!clientId || !clientSecret || !audience || !tokenUrl || !issuerBaseURL) {
  throw new Error("Missing required environment variables.");
}

// Token request payload
const tokenRequestData = {
  client_id: clientId,
  client_secret: clientSecret,
  audience: audience,
  grant_type: "authorization_code",
  redirect_uri: "https://energygridshow.onrender.com",
  // grant_type: "client_credentials",
  
};

// Function to fetch an access token
const getToken = async () => {
  try {
    const response = await axios.post(tokenUrl, tokenRequestData);
    const token = response.data.access_token;
    console.log("✅ Token fetched successfully:", token); // Log success message
    return token;
  } catch (error) {
    console.error(
      "❌ Error fetching token:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// JWT middleware for route protection
const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: issuerBaseURL,
  tokenSigningAlg: "RS256",
});

// Initialize Express app
const app = express();

// Protected route example
app.get("/protected", jwtCheck, (req, res) => {
  res.send("You have accessed a protected route with a valid JWT!");
});

// Token demo route
app.get("/token-demo", async (req, res) => {
  try {
    const token = await getToken();
    res.json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server and fetch the token on startup
(async () => {
  try {
    const token = await getToken(); // Fetch token on startup
    console.log("🌟 Example token retrieved on startup:", token); // Log token fetched at startup
  } catch (error) {
    console.error("⚠️ Unable to retrieve token at startup:", error);
  }
})();

// Export the Express app for Vercel
export default app;
