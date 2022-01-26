import mongoose from "mongoose";

const waterFallSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String },
  },
  geometry: {
    type: { type: String },
    coordinates: { type: Array, required: true },
  },
});
const Waterfall = mongoose.model("waterfalls", waterFallSchema);

export default Waterfall;
