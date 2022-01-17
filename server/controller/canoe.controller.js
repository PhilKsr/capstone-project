import Canoe from "../model/canoe-model.js";

const getCanoes = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const result = await Canoe.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  res.json(result);
};

export default getCanoes;
