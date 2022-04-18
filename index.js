// External Imports
const Discord = require("discord.js");
const express = require("express");
const fs = require("fs");

// Initialization
const token = "";
const prefix = ">";
const app = express();

// Create Discord Client
const client = new Discord.Client({
  partials: [
    "MESSAGE",
    "CHANNEL",
    "REACTION"
  ]
});

// Create Server App
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><body><p>Sheesh</p></body></html>");
  res.end();
});

app.listen(5000);

// Initialize the Bot Client
client.once("ready", () => {
  console.log("Bot is Ready");
  console.log("Listening on Port");
  client.user.setActivity("Jeffrey", {
    type: "WATCHING"
  });
});

// Login
client.login("TOKEN GOES HERE")