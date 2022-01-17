import mongoose from "mongoose";

const ruinSchema = new mongoose.Schema({
  type: String,
});
const Ruin = mongoose.model("ruins", ruinSchema);

export default Ruin;
