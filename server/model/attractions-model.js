import mongoose from "mongoose";

const attractionsSchema = new mongoose.Schema({
  type: String,
});
const Attraction = mongoose.model("attractions", attractionsSchema);

export default Attraction;
