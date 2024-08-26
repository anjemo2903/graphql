// models/Ride.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  departureFrom: { type: String, required: true },
  arriveTo: { type: String, required: true },
  days: {
    mon: { type: Boolean, default: false },
    tue: { type: Boolean, default: false },
    wed: { type: Boolean, default: false },
    thu: { type: Boolean, default: false },
    fri: { type: Boolean, default: false },
    sat: { type: Boolean, default: false },
    sun: { type: Boolean, default: false },
  },
  time: { type: String, required: true },
  seats: { type: Number, required: true, min: 1 },
  fee: { type: Number, required: true, min: 0 },
  vehicleDetails: {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true, min: 1886 },
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Ride", rideSchema);
