import AlpineHut from "../model/alpine_hut-model.js";
import Aqueduct from "../model/aqueducts-model.js";
import Attraction from "../model/attractions-model.js";
import CampSite from "../model/camp_sites-model.js";
import Canoe from "../model/canoe-model.js";
import CaravanSite from "../model/caravan_site-model.js";
import Castle from "../model/castles-model.js";
import Fuel from "../model/fuel-model.js";
import Geyser from "../model/geysers-model.js";
import Hotel from "../model/hotels-model.js";
import Restaurant from "../model/restaurants-model.js";
import Ruin from "../model/ruins-model.js";
import ThemePark from "../model/theme_parks-model.js";
import Viewpoint from "../model/viewpoints-model.js";
import Waterfall from "../model/waterfalls-model.js";

const getAll = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  let result = [];
  const alpine_huts = await AlpineHut.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...alpine_huts];
  const aqueducts = await Aqueduct.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...aqueducts];
  const attractions = await Attraction.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...attractions];
  const campSites = await CampSite.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...campSites];
  const canoes = await Canoe.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...canoes];
  const caravanSites = await CaravanSite.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...caravanSites];
  const castles = await Castle.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...castles];
  const fuels = await Fuel.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...fuels];
  const geysers = await Geyser.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...geysers];
  const hotels = await Hotel.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...hotels];
  const restaurants = await Restaurant.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...restaurants];
  const ruins = await Ruin.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...ruins];
  const themeParks = await ThemePark.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...themeParks];
  const viewpoints = await Viewpoint.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...viewpoints];
  const waterfalls = await Waterfall.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  result = [...result, ...waterfalls];

  res.json(result);
};

export default getAll;
