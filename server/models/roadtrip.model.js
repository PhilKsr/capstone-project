import mongoose from "mongoose";

const roadtripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  locations: Array,
  costs: Array,
});
const Roadtrip = mongoose.model("roadtrips", roadtripSchema);

export default Roadtrip;
