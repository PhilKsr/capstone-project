import mongoose from "mongoose";

const ruinSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const Ruin = mongoose.model("ruins", ruinSchema);

export default Ruin;
