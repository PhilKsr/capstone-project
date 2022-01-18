import mongoose from "mongoose";

const alpineHutSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    opening_hours: String,
    phone: String,
    website: String,
  },
});
const AlpineHut = mongoose.model("alpine_hut", alpineHutSchema);

export default AlpineHut;
