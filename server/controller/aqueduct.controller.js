import Aqueduct from "../model/aqueducts-model.js";

const getAqueducts = async (req, res) => {
  const result = await Aqueduct.find().limit(25);
  res.json(result);
};

export default getAqueducts;
