import Fuel from "../model/fuel-model.js";

const getFuel = async (req, res) => {
  const result = await Fuel.find().limit(25);
  res.json(result);
};

export default getFuel;
