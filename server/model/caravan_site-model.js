import mongoose from "mongoose";

const caravanSitesSchema = new mongoose.Schema({
  properties: {
    name: { type: String, required: true },
  },
});
const CaravanSite = mongoose.model("caravan_sites", caravanSitesSchema);

export default CaravanSite;
