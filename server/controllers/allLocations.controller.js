import {
  getCollection,
  getWebsiteCollection,
} from "../lib/controllerHelpers.js";
import AlpineHut from "../models/alpine_hut.model.js";
import Attraction from "../models/attractions.model.js";
import CampSite from "../models/camp_sites.model.js";
import CaravanSite from "../models/caravan_site.model.js";
import Castle from "../models/castles.model.js";
import Fuel from "../models/fuel.model.js";
import Hotel from "../models/hotels.model.js";
import Restaurant from "../models/restaurants.model.js";
import Ruin from "../models/ruins.model.js";
import ThemePark from "../models/theme_parks.model.js";
import Waterfall from "../models/waterfalls.model.js";

export const getAll = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const filter = req.query.collections;
  let result = [];

  if (filter === "false") {
    const attractions = await getWebsiteCollection(
      Attraction,
      boundsSW,
      boundsNE
    );
    const randomAttractions = attractions.slice(0, 25);
    result = [...result, ...randomAttractions];
    const alpineHuts = await getWebsiteCollection(
      AlpineHut,
      boundsSW,
      boundsNE
    );
    const randomAlpineHuts = alpineHuts.slice(0, 25);
    result = [...result, ...randomAlpineHuts];
    const campSites = await getWebsiteCollection(CampSite, boundsSW, boundsNE);
    const randomCampSites = campSites.slice(0, 25);
    result = [...result, ...randomCampSites];
    const caravanSites = await getWebsiteCollection(
      CaravanSite,
      boundsSW,
      boundsNE
    );
    const randomCaravanSites = caravanSites.slice(0, 25);
    result = [...result, ...randomCaravanSites];
    const castles = await getWebsiteCollection(Castle, boundsSW, boundsNE);
    const randomCastles = castles.slice(0, 25);
    result = [...result, ...randomCastles];
    const hotels = await getWebsiteCollection(Hotel, boundsSW, boundsNE);
    const randomHotels = hotels.slice(0, 25);
    result = [...result, ...randomHotels];
    const ruins = await getCollection(Ruin, boundsSW, boundsNE);
    const randomRuins = ruins.slice(0, 25);
    result = [...result, ...randomRuins];
    const themeParks = await getWebsiteCollection(
      ThemePark,
      boundsSW,
      boundsNE
    );
    const randomThemeParks = themeParks.slice(0, 25);
    result = [...result, ...randomThemeParks];

    res.json(result);
    return;
  }

  if (filter.includes("Alpine Hut")) {
    const alpineHuts = await getWebsiteCollection(
      AlpineHut,
      boundsSW,
      boundsNE
    );
    const randomAlpineHuts = alpineHuts.slice(0, 500);
    result = [...result, ...randomAlpineHuts];
  }
  if (filter.includes("Attraction")) {
    const attractions = await getWebsiteCollection(
      Attraction,
      boundsSW,
      boundsNE
    );
    const randomAttractions = attractions.slice(0, 500);
    result = [...result, ...randomAttractions];
  }
  if (filter.includes("Campsite")) {
    const campSites = await getWebsiteCollection(CampSite, boundsSW, boundsNE);
    const randomCampSites = campSites.slice(0, 500);
    result = [...result, ...randomCampSites];
  }

  if (filter.includes("Caravansite")) {
    const caravanSites = await getWebsiteCollection(
      CaravanSite,
      boundsSW,
      boundsNE
    );
    const randomCaravanSites = caravanSites.slice(0, 500);
    result = [...result, ...randomCaravanSites];
  }
  if (filter.includes("Castle")) {
    const castles = await getWebsiteCollection(Castle, boundsSW, boundsNE);
    const randomCastles = castles.slice(0, 500);
    result = [...result, ...randomCastles];
  }
  if (filter.includes("Fuelstation")) {
    const fuels = await getCollection(Fuel, boundsSW, boundsNE);
    const randomFuels = fuels.slice(0, 500);
    result = [...result, ...randomFuels];
  }

  if (filter.includes("Hotel")) {
    const hotels = await getWebsiteCollection(Hotel, boundsSW, boundsNE);
    const randomHotels = hotels.slice(0, 500);
    result = [...result, ...randomHotels];
  }
  if (filter.includes("Restaurant")) {
    const restaurants = await getWebsiteCollection(
      Restaurant,
      boundsSW,
      boundsNE
    );
    const randomRestaurants = restaurants.slice(0, 500);
    result = [...result, ...randomRestaurants];
  }
  if (filter.includes("Ruin")) {
    const ruins = await getCollection(Ruin, boundsSW, boundsNE);
    const randomRuins = ruins.slice(0, 500);
    result = [...result, ...randomRuins];
  }
  if (filter.includes("Themepark")) {
    const themeParks = await getWebsiteCollection(
      ThemePark,
      boundsSW,
      boundsNE
    );
    const randomThemeParks = themeParks.slice(0, 500);
    result = [...result, ...randomThemeParks];
  }

  if (filter.includes("Waterfall")) {
    const waterfalls = await getCollection(Waterfall, boundsSW, boundsNE);
    const randomWaterfalls = waterfalls.slice(0, 500);
    result = [...result, ...randomWaterfalls];
  }

  res.json(result);
};

export const postLocation = async (req, res) => {
  try {
    const type = req.body.type;
    let location;
    if (type === "Alpine Hut") {
      location = new AlpineHut({
        ...req.body,
      });
    }
    if (type === "Attraction") {
      location = new Attraction({
        ...req.body,
      });
    }
    if (type === "Campsite") {
      location = new CampSite({
        ...req.body,
      });
    }
    if (type === "Caravansite") {
      location = new CaravanSite({
        ...req.body,
      });
    }
    if (type === "Castle") {
      location = new Castle({
        ...req.body,
      });
    }
    if (type === "Fuelstation") {
      location = new Fuel({
        ...req.body,
      });
    }
    if (type === "Hotel") {
      location = new Hotel({
        ...req.body,
      });
    }
    if (type === "Restaurant") {
      location = new Restaurant({
        ...req.body,
      });
    }
    if (type === "Ruin") {
      location = new Ruin({
        ...req.body,
      });
    }
    if (type === "Themepark") {
      location = new ThemePark({
        ...req.body,
      });
    }
    if (type === "Waterfall") {
      location = new Waterfall({
        ...req.body,
      });
    }
    const result = await location.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
