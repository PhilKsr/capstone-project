import Ruin from "../model/ruins-model.js";

const getRuins = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const result = await Ruin.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  res.json(result);
};

export default getRuins;
