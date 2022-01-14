import CampSite from "../model/camp_sites-model.js";

const getCampSites = async (req, res) => {
  const result = await CampSite.find().limit(25);
  res.json(result);
};

export default getCampSites;
