import Castle from "../model/castles-model.js";

const getCastles = async (boundsSW, boundsNE) => {
  const result = await Castle.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getCastles;
