import Restaurant from "../model/restaurants-model.js";

const getRestaurants = async (req, res) => {
  const boundsSW = req.query.boundsSW;
  const boundsNE = req.query.boundsNE;
  const result = await Restaurant.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  res.json(result);
};

export default getRestaurants;
