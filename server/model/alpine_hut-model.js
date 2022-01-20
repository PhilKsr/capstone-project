import mongoose from "mongoose";

const alpineHutSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const AlpineHut = mongoose.model("alpine_hut", alpineHutSchema);

export default AlpineHut;
