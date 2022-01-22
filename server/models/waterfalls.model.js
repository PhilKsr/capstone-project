import mongoose from "mongoose";

const waterFallSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const Waterfall = mongoose.model("waterfalls", waterFallSchema);

export default Waterfall;
