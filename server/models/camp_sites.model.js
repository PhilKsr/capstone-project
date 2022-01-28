import mongoose from "mongoose";

const campSitesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
  geometry: {
    type: { type: String },
    coordinates: { type: Array, required: true },
  },
});
const CampSite = mongoose.model("camp_sites", campSitesSchema);

export default CampSite;
