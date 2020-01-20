const express = require("express");
const router = express.Router();

/**
 * @route           GET api/auth
 * @description     Test route
 * @access          Public
 */
router.get("/", (req, res) => {
  return res.send("Auth route");
});

module.exports = router;
