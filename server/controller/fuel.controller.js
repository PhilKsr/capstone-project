import Fuel from "../model/fuel-model.js";

const getFuel = async (boundsSW, boundsNE) => {
  const result = await Fuel.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getFuel;
