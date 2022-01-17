import Waterfall from "../model/waterfalls-model.js";

const getWaterfalls = async (boundsSW, boundsNE) => {
  const result = await Waterfall.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getWaterfalls;
