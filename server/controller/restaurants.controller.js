import Restaurant from "../model/restaurants-model.js";

const getRestaurants = async (req, res) => {
  const result = await Restaurant.find().limit(25);
  res.json(result);
};

export default getRestaurants;
