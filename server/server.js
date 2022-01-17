import express from "express";
import { dirname } from "./lib/pathHelpers.js";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import getAlpineHuts from "./controller/alpine_hut.controller.js";
import cors from "cors";
import getAttractions from "./controller/attractions.controller.js";
import getCampSites from "./controller/camp_sites.controller.js";
import getCaravanSites from "./controller/caravan_sites.controller.js";
import getFuel from "./controller/fuel.controller.js";
import getRestaurants from "./controller/restaurants.controller.js";
import getRuins from "./controller/ruins.controller.js";
import getThemeParks from "./controller/theme_parks.controller.js";
import getWaterfalls from "./controller/waterfalls.controller.js";
import getAll from "./controller/all.controller.js";
import getCastles from "./controller/castles.controller.js";
import getHotels from "./controller/hotels.controller.js";

const __dirname = dirname(import.meta.url);

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const serverPort = process.env.PORT || 4000;

const server = express();
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
);

server.use(express.json());
server.use(cors());

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Mongodb connection error"));
db.once("open", function (callback) {
  console.log("Mongodb connection succeeded");
});

server.get("/api/alpine_huts", getAlpineHuts);
server.get("/api/attractions", getAttractions);
server.get("/api/camp_sites", getCampSites);
server.get("/api/caravan_sites", getCaravanSites);
server.get("/api/castles", getCastles);
server.get("/api/fuel", getFuel);
server.get("/api/hotels", getHotels);
server.get("/api/restaurants", getRestaurants);
server.get("/api/ruins", getRuins);
server.get("/api/theme_parks", getThemeParks);
server.get("/api/waterfalls", getWaterfalls);
server.get("/api", getAll);

//Static assets (images, css, js)
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

server.listen(serverPort, () =>
  console.log(`Server is up and running on port ${serverPort}`)
);
