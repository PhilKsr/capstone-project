import mongoose from "mongoose";

const canoeSchema = new mongoose.Schema({
  type: String,
});
const Canoe = mongoose.model("canoe", canoeSchema);

export default Canoe;
