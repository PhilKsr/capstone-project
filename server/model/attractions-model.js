import mongoose from "mongoose";

const attractionsSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const Attraction = mongoose.model("attractions", attractionsSchema);

export default Attraction;
