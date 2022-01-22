import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const Restaurant = mongoose.model("restaurants", restaurantSchema);

export default Restaurant;
