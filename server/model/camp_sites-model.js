import mongoose from "mongoose";

const campSitesSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: { type: String, required: true },
  },
});
const CampSite = mongoose.model("camp_sites", campSitesSchema);

export default CampSite;
