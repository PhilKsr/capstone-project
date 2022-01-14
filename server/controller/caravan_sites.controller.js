import CaravanSite from "../model/caravan_site-model.js";

const getCaravanSites = async (req, res) => {
  const result = await CaravanSite.find().limit(25);
  res.json(result);
};

export default getCaravanSites;
