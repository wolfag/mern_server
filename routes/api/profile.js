const express = require("express");
const router = express.Router();

/**
 * @route           GET api/profile
 * @description     Test route
 * @access          Public
 */
router.get("/", (req, res) => {
  return res.send("Profile route");
});

module.exports = router;
