import AlpineHut from "../model/alpine_hut-model.js";

const getAlpineHuts = async (boundsSW, boundsNE) => {
  const result = await AlpineHut.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getAlpineHuts;
