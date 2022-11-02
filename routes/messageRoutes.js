const router = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");
const { readMessages, writeMessages } = require("../utils/helpers");

router.get("/", (req, res) => {
  const teams = readMessages();
  res.status(200).json(teams);
});

module.exports = router;
