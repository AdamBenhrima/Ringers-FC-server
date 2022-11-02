const fs = require("fs");

const readTeams = () => {
  return JSON.parse(fs.readFileSync("./data/teams.json"));
};
const readPlayers = () => {
  return JSON.parse(fs.readFileSync("./data/players.json"));
};

const readMessages = () => {
  return JSON.parse(fs.readFileSync("./data/messages.json"));
};

const writeTeams = (teamData) => {
  fs.writeFileSync("./data/teams.json", JSON.stringify(teamData));
};

const writePlayers = (playerData) => {
  fs.writeFileSync("./data/players.json", JSON.stringify(playerData));
};

const writeMessages = (playerData) => {
  fs.writeFileSync("./data/messages.json", JSON.stringify(playerData));
};

module.exports = {
  readTeams,
  readPlayers,
  readMessages,
  writeTeams,
  writePlayers,
  writeMessages,
};
