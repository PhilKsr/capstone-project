import Viewpoint from "../model/viewpoints-model.js";

const count = function random(count) {
  return Math.floor(Math.random() * count);
};

const getViewpoints = async (req, res) => {
  const result = await Viewpoint.find().limit(25).skip(random()).next();
  res.json(result);
};

export default getViewpoints;
