import AlpineHut from "../model/alpine_hut-model.js";

const getAlpineHuts = async (req, res) => {
  const result = await AlpineHut.find().limit(25);
  res.json(result);
};

export default getAlpineHuts;
