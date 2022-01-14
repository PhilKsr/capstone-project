import Castle from "../model/castles-model.js";

const getCastles = async (req, res) => {
  const result = await Castle.find().limit(25);
  res.json(result);
};

export default getCastles;
