import Attraction from "../model/attractions-model.js";

const getAttractions = async (req, res) => {
  const result = await Attraction.find().limit(25);
  res.json(result);
};

export default getAttractions;
