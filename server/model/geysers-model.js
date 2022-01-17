import mongoose from "mongoose";

const geyserSchema = new mongoose.Schema({
  type: String,
});
const Geyser = mongoose.model("geysers", geyserSchema);

export default Geyser;
