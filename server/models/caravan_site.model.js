import mongoose from "mongoose";

const caravanSitesSchema = new mongoose.Schema({
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
const CaravanSite = mongoose.model("caravan_sites", caravanSitesSchema);

export default CaravanSite;
