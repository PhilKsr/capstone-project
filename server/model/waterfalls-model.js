import mongoose from "mongoose";

const waterFallSchema = new mongoose.Schema({
  type: String,
});
const Waterfall = mongoose.model("waterfalls", waterFallSchema);

export default Waterfall;
