import mongoose from "mongoose";

const campSitesSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
    website: String,
    ["contact:website"]: String,
    ["url:official"]: String,
  },
});
const CampSite = mongoose.model("camp_sites", campSitesSchema);

export default CampSite;
