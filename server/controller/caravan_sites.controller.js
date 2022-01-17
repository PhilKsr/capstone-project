import CaravanSite from "../model/caravan_site-model.js";

const getCaravanSites = async (boundsSW, boundsNE) => {
  const result = await CaravanSite.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getCaravanSites;
