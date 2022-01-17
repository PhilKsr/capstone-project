import Attraction from "../model/attractions-model.js";

const getAttractions = async (boundsSW, boundsNE) => {
  const result = await Attraction.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getAttractions;
