import mongoose from "mongoose";

const castleSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const Castle = mongoose.model("castles", castleSchema);

export default Castle;
