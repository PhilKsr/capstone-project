import Roadtrip from "../models/roadtrip.model.js";

export const postRoadtrip = async (req, res) => {
  const roadtrip = new Roadtrip({
    name: req.body.roadtripName,
    locations: req.body.roadtripLocations,
  });
  try {
    const result = await roadtrip.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
