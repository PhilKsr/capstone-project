import Geyser from "../model/geysers-model.js";

const getGeysers = async (req, res) => {
  const result = await Geyser.find().limit(25);
  res.json(result);
};

export default getGeysers;
