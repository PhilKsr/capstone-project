import Hotel from "../model/hotels-model.js";

const getHotels = async (req, res) => {
  const result = await Hotel.find().limit(25);
  res.json(result);
};

export default getHotels;
