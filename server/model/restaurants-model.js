import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const Restaurant = mongoose.model("restaurants", restaurantSchema);

export default Restaurant;
