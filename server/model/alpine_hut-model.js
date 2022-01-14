import mongoose from "mongoose";

const alpineHutSchema = new mongoose.Schema({
  type: String,
});
const AlpineHut = mongoose.model("alpine_hut", alpineHutSchema);

export default AlpineHut;
