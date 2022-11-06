const router = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");
const { readPlayers, writePlayers } = require("../utils/helpers");

router.get("/", (req, res) => {
  const players = readPlayers();
  res.status(200).json(players);
});

router.get("/:playerId", (req, res) => {
  const players = readPlayers();
  const playerId = req.params.playerId;
  const currentPlayer = players.find((player) => player.id === playerId);
  !currentPlayer
    ? res.status(404).send(`Could not find player with id ${playerId}`)
    : res.status(200).json(currentPlayer);
});

router.post("/", (req, res) => {
  const players = readPlayers();
  const {
    playerName,
    playerEmail,
    playerTelephone,
    postcode,
    level,
    positionPlayed,
  } = req.body;
  console.log(req.body);
  const newPlayer = {
    id: uuid(),
    playerName: playerName,
    playerEmail: playerEmail,
    playerTelephone: playerTelephone,
    postcode: postcode,
    level:
      level === 1 ? "Casual" : level === 2 ? "Competitive Amateur" : "Semi-pro",
    positionPlayed: positionPlayed,
  };
  players.unshift(newPlayer);
  writePlayers(players);
  res.status(200).json(players);

  res.status(200).json(newPlayer);
  console.log(newPlayer);
});

module.exports = router;
