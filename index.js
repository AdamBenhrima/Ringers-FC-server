const express = require("express");
const app = express();
const teamRoutes = require("./routes/teamRoutes");
const playerRoutes = require("./routes/playerRoutes");
const messageRoutes = require("./routes/messageRoutes");

require("dotenv").config();
const port = process.env.PORT || 8080;

//MIDDLEWARE
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);
app.use("/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
