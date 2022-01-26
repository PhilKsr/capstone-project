import mongoose from "mongoose";

const attractionsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
  geometry: {
    type: { type: String },
    coordinates: { type: Array, required: true },
  },
});
const Attraction = mongoose.model("attractions", attractionsSchema);

export default Attraction;
