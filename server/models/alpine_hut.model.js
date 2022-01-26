import mongoose from "mongoose";

const alpineHutSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
  geometry: {
    coordinates: { type: Array, required: true },
  },
});
const AlpineHut = mongoose.model("alpine_hut", alpineHutSchema);

export default AlpineHut;
