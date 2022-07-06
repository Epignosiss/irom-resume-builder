var express = require("express");
const { createResume } = require("../api/controllers/resume");

var router = express.Router();

/* POST users listing. */
router.post("/", createResume);

// router.get("/", getConvo);

module.exports = router;
