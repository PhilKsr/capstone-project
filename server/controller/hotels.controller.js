import Hotel from "../model/hotels-model.js";

const getHotels = async (boundsSW, boundsNE) => {
  const result = await Hotel.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getHotels;
