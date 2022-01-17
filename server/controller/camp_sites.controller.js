import CampSite from "../model/camp_sites-model.js";

const getCampSites = async (boundsSW, boundsNE) => {
  const result = await CampSite.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getCampSites;
