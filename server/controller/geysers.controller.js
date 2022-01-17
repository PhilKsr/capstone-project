import Geyser from "../model/geysers-model.js";

const getGeysers = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const result = await Geyser.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  res.json(result);
};

export default getGeysers;
