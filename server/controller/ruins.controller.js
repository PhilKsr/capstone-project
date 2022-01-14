import Ruin from "../model/ruins-model.js";

const getRuins = async (req, res) => {
  const result = await Ruin.find().limit(25);
  res.json(result);
};

export default getRuins;
