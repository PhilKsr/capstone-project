import Canoe from "../model/canoe-model.js";

const getCanoes = async (req, res) => {
  const result = await Canoe.find().limit(25);
  res.json(result);
};

export default getCanoes;
