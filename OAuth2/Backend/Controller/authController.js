const { default: axios } = require("axios");
const oAuth2Client = require("../Utils/googleconfig");

const handleAuth = async (req, res) => {
  try {
    const { code } = req.body;
    
    
    // Exchange code for tokens
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Fetch user info using the access token
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userInfo.data,
    });
  } catch (error) {
    console.error("Google OAuth Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};

module.exports = { handleAuth };
