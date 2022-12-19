const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

exports.getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place) {
    return next(
      new HttpError("Could not find a place for the Provided id.", 404)
    );
  }

  res.json({ place });
};
exports.getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => p.creator === userId);
  if (!place) {
    return next(new HttpError(
      "Could not find a place for the provided user id.",
      404
    ));
  }
  res.json({ place });
};
