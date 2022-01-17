import Ruin from "../model/ruins-model.js";

const getRuins = async (boundsSW, boundsNE) => {
  const result = await Ruin.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getRuins;
