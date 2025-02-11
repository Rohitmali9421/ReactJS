const app = require("express");
const { handleAuth } = require("../Controller/authController");

const router = app.Router();

router.get("/login", (req, res) => {
  res.send("Login route");
});
router.post("/google",handleAuth );
module.exports = router;
