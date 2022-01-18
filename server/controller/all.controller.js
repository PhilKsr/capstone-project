import getCollection from "../lib/controllerHelpers.js";
import AlpineHut from "../model/alpine_hut-model.js";
import Attraction from "../model/attractions-model.js";
import CampSite from "../model/camp_sites-model.js";
import CaravanSite from "../model/caravan_site-model.js";
import Castle from "../model/castles-model.js";
import Fuel from "../model/fuel-model.js";
import Hotel from "../model/hotels-model.js";
import Restaurant from "../model/restaurants-model.js";
import Ruin from "../model/ruins-model.js";
import ThemePark from "../model/theme_parks-model.js";
import Waterfall from "../model/waterfalls-model.js";

const getAll = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const filter = req.query.collections;
  let result = [];

  if (filter === "false") {
    const attractions = await getCollection(Attraction, boundsSW, boundsNE);
    const randomAttractions = attractions.slice(0, 25);
    result = [...result, ...randomAttractions];
    const alpineHuts = await getCollection(AlpineHut, boundsSW, boundsNE);
    const randomAlpineHuts = alpineHuts.slice(0, 25);
    result = [...result, ...randomAlpineHuts];
    const campSites = await getCollection(CampSite, boundsSW, boundsNE);
    const randomCampSites = campSites.slice(0, 25);
    result = [...result, ...randomCampSites];
    const caravanSites = await getCollection(CaravanSite, boundsSW, boundsNE);
    const randomCaravanSites = caravanSites.slice(0, 25);
    result = [...result, ...randomCaravanSites];
    const castles = await getCollection(Castle, boundsSW, boundsNE);
    const randomCastles = castles.slice(0, 25);
    result = [...result, ...randomCastles];
    const hotels = await getCollection(Hotel, boundsSW, boundsNE);
    const randomHotels = hotels.slice(0, 25);
    result = [...result, ...randomHotels];
    const ruins = await getCollection(Ruin, boundsSW, boundsNE);
    const randomRuins = ruins.slice(0, 25);
    result = [...result, ...randomRuins];
    const themeParks = await getCollection(ThemePark, boundsSW, boundsNE);
    const randomThemeParks = themeParks.slice(0, 25);
    result = [...result, ...randomThemeParks];

    res.json(result);
    return;
  }

  if (filter.includes("Alpine Huts")) {
    const alpineHuts = await getCollection(AlpineHut, boundsSW, boundsNE);
    const randomAlpineHuts = alpineHuts.slice(0, 500);
    result = [...result, ...randomAlpineHuts];
  }
  if (filter.includes("Attractions")) {
    const attractions = await getCollection(Attraction, boundsSW, boundsNE);
    const randomAttractions = attractions.slice(0, 500);
    result = [...result, ...randomAttractions];
  }
  if (filter.includes("Campsites")) {
    const campSites = await getCollection(CampSite, boundsSW, boundsNE);
    const randomCampSites = campSites.slice(0, 500);
    result = [...result, ...randomCampSites];
  }

  if (filter.includes("Caravansites")) {
    const caravanSites = await getCollection(CaravanSite, boundsSW, boundsNE);
    const randomCaravanSites = caravanSites.slice(0, 500);
    result = [...result, ...randomCaravanSites];
  }
  if (filter.includes("Castles")) {
    const castles = await getCollection(Castle, boundsSW, boundsNE);
    const randomCastles = castles.slice(0, 500);
    result = [...result, ...randomCastles];
  }
  if (filter.includes("Fuelstations")) {
    const fuels = await getCollection(Fuel, boundsSW, boundsNE);
    const randomFuels = fuels.slice(0, 500);
    result = [...result, ...randomFuels];
  }

  if (filter.includes("Hotels")) {
    const hotels = await getCollection(Hotel, boundsSW, boundsNE);
    const randomHotels = hotels.slice(0, 500);
    result = [...result, ...randomHotels];
  }
  if (filter.includes("Restaurants")) {
    const restaurants = await getCollection(Restaurant, boundsSW, boundsNE);
    const randomRestaurants = restaurants.slice(0, 500);
    result = [...result, ...randomRestaurants];
  }
  if (filter.includes("Ruins")) {
    const ruins = await getCollection(Ruin, boundsSW, boundsNE);
    const randomRuins = ruins.slice(0, 500);
    result = [...result, ...randomRuins];
  }
  if (filter.includes("Themeparks")) {
    const themeParks = await getCollection(ThemePark, boundsSW, boundsNE);
    const randomThemeParks = themeParks.slice(0, 500);
    result = [...result, ...randomThemeParks];
  }

  if (filter.includes("Waterfalls")) {
    const waterfalls = await getCollection(Waterfall, boundsSW, boundsNE);
    const randomWaterfalls = waterfalls.slice(0, 500);
    result = [...result, ...randomWaterfalls];
  }

  res.json(result);
};

export default getAll;
