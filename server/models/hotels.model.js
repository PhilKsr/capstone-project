import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
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
const Hotel = mongoose.model("hotels", hotelSchema);

export default Hotel;
