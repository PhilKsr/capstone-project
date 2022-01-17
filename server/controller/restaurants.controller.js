import Restaurant from "../model/restaurants-model.js";

const getRestaurants = async (boundsSW, boundsNE) => {
  const result = await Restaurant.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getRestaurants;
