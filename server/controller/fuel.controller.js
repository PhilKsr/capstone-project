import Fuel from "../model/fuel-model.js";

const getFuel = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const result = await Fuel.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  res.json(result);
};

export default getFuel;
