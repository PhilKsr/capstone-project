import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  type: String,
});
const Restaurant = mongoose.model("restaurants", restaurantSchema);

export default Restaurant;
