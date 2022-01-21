import mongoose from "mongoose";

const attractionsSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const Attraction = mongoose.model("attractions", attractionsSchema);

export default Attraction;
