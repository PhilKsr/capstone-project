import mongoose from "mongoose";

const viewPointsSchema = new mongoose.Schema({
  type: String,
});
const Viewpoint = mongoose.model("viewpoints", viewPointsSchema);

export default Viewpoint;
