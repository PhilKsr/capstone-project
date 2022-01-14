import ThemePark from "../model/theme_parks-model.js";

const getThemeParks = async (req, res) => {
  const result = await ThemePark.find().limit(25);
  res.json(result);
};

export default getThemeParks;
