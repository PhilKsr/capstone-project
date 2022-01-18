const getCollection = async (Model, boundsSW, boundsNE) => {
  const result = await Model.find({
    geometry: {
      $geoWithin: {
        $box: [boundsSW.split(","), boundsNE.split(",")],
      },
    },
  });
  return result;
};

export default getCollection;
