export const getCollection = async (Model, boundsSW, boundsNE) => {
  const result = await Model.find({
    $and: [
      { "properties.name": { $exists: true } },
      {
        geometry: {
          $geoWithin: {
            $box: [boundsSW.split(","), boundsNE.split(",")],
          },
        },
      },
    ],
  });
  return result;
};

export const getWebsiteCollection = async (Model, boundsSW, boundsNE) => {
  const result = await Model.find({
    $and: [
      { "properties.name": { $exists: true } },
      { "properties.website": { $exists: true } },
      {
        geometry: {
          $geoWithin: {
            $box: [boundsSW.split(","), boundsNE.split(",")],
          },
        },
      },
    ],
  });
  return result;
};
