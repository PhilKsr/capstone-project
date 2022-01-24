import Roadtrip from "../models/roadtrip.model.js";

export const postRoadtrip = async (req, res) => {
  const roadtrip = new Roadtrip({
    name: req.body.name,
    locations: req.body.locations,
  });
  try {
    const result = await roadtrip.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export const getAllRoadtrips = async (req, res) => {
  const results = await Roadtrip.find();
  res.json(results);
};

export const getOneRoadtrip = async (req, res) => {
  const id = req.query.roadtripId;
  const result = await Roadtrip.findOne({ _id: `${id}` });
  res.json(result);
};

export const deleteOneRoadtrip = async (req, res) => {
  const id = req.query.roadtripId;
  try {
    const result = await Roadtrip.findOneAndDelete({ _id: `${id}` });
    if (result) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

export const updateOneRoadtrip = async (req, res) => {
  const id = req.query.roadtripId;
  const roadtrip = req.body;
  try {
    const result = await Roadtrip.findOneAndUpdate({ _id: `${id}` }, roadtrip);
    if (result) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  } catch (error) {
    res.json(error);
  }
};
