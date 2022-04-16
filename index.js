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
  res.write("<html><body><p>Jeffrey</p></body></html>");
  res.end();
});

app.listen(5000);
