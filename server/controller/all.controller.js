import getAlpineHuts from "./alpine_hut.controller.js";
import getAttractions from "./attractions.controller.js";
import getCampSites from "./camp_sites.controller.js";
import getCaravanSites from "./caravan_sites.controller.js";
import getCastles from "./castles.controller.js";
import getFuel from "./fuel.controller.js";
import getHotels from "./hotels.controller.js";
import getRestaurants from "./restaurants.controller.js";
import getRuins from "./ruins.controller.js";
import getThemeParks from "./theme_parks.controller.js";
import getWaterfalls from "./waterfalls.controller.js";

const getAll = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const filter = req.query.collections;
  let result = [];

  if (filter === "false") {
    const attractions = await getAttractions(boundsSW, boundsNE);
    const randomAttractions = attractions
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);

    result = [...randomAttractions];
    res.json(result);
    return;
  }

  if (filter.includes("Alpine Huts")) {
    const alpineHuts = await getAlpineHuts(boundsSW, boundsNE);
    const randomAlpineHuts = alpineHuts
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomAlpineHuts];
  }
  if (filter.includes("Attractions")) {
    const attractions = await getAttractions(boundsSW, boundsNE);
    const randomAttractions = attractions
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomAttractions];
  }
  if (filter.includes("Campsites")) {
    const campSites = await getCampSites(boundsSW, boundsNE);
    const randomCampSites = campSites
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomCampSites];
  }

  if (filter.includes("Caravansites")) {
    const caravanSites = await getCaravanSites(boundsSW, boundsNE);
    const randomCaravanSites = caravanSites
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomCaravanSites];
  }
  if (filter.includes("Castles")) {
    const castles = await getCastles(boundsSW, boundsNE);
    const randomCastles = castles
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomCastles];
  }
  if (filter.includes("Fuelstations")) {
    const fuels = await getFuel(boundsSW, boundsNE);
    const randomFuels = fuels
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomFuels];
  }

  if (filter.includes("Hotels")) {
    const hotels = await getHotels(boundsSW, boundsNE);
    const randomHotels = hotels
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomHotels];
  }
  if (filter.includes("Restaurants")) {
    const restaurants = await getRestaurants(boundsSW, boundsNE);
    const randomRestaurants = restaurants
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomRestaurants];
  }
  if (filter.includes("Ruins")) {
    const ruins = await getRuins(boundsSW, boundsNE);
    const randomRuins = ruins
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomRuins];
  }
  if (filter.includes("Themeparks")) {
    themeParks = await getThemeParks(boundsSW, boundsNE);
    const randomThemeParks = themeParks
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomThemeParks];
  }

  if (filter.includes("Waterfalls")) {
    const waterfalls = await getWaterfalls(boundsSW, boundsNE);
    const randomWaterfalls = waterfalls
      .sort(() => Math.random() - Math.random())
      .slice(0, 500);
    result = [...result, ...randomWaterfalls];
  }

  res.json(result);
};

export default getAll;
