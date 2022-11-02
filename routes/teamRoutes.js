const router = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");
const { readTeams, writeTeams } = require("../utils/helpers");

router.get("/", (req, res) => {
  const teams = readTeams();
  res.status(200).json(teams);
});

module.exports = router;
