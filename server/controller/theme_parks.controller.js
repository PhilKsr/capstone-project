import ThemePark from "../model/theme_parks-model.js";

const getThemeParks = async (boundsSW, boundsNE) => {
  const result = await ThemePark.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getThemeParks;
