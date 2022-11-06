const router = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");
const { readTeams, writeTeams } = require("../utils/helpers");

router.get("/", (req, res) => {
  const teams = readTeams();
  res.status(200).json(teams);
});

router.get("/:teamId", (req, res) => {
  const teams = readTeams();
  const teamId = req.params.teamId;
  const currentTeam = teams.find((team) => team.id === teamId);
  !currentTeam
    ? res.status(404).send(`Could not find team with id ${teamId}`)
    : res.status(200).json(currentTeam);
});

router.post("/", (req, res) => {
  const teams = readTeams();
  const {
    teamName,
    teamEmail,
    teamTelephone,
    postcode,
    level,
    positionNeeded,
  } = req.body;
  console.log(req.body);
  const newTeam = {
    id: uuid(),
    teamName: teamName,
    teamEmail: teamEmail,
    teamTelephone: teamTelephone,
    postcode: postcode,
    level:
      level === 1 ? "Casual" : level === 2 ? "Competitive Amateur" : "Semi-pro",
    positionNeeded: positionNeeded,
  };
  teams.unshift(newTeam);
  writeTeams(teams);
  res.status(200).json(teams);

  res.status(200).json(newTeam);
  console.log(newTeam);
});

module.exports = router;
