import { Schema } from 'mongoose';

export const TripSchema = new Schema({
  start: {
    date: Date,
    pickup_address: String,
    pickup_location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: [Number, Number],
    },
  },
  end: {
    date: Date,
    pickup_address: String,
    pickup_location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: [Number, Number],
    },
  },
  country: {
    name: String,
  },
  city: {
    name: { type: String, index: true },
  },
  passenger: {
    first_name: String,
    last_name: String,
  },
  driver: {
    first_name: String,
    last_name: String,
  },
  car: {
    plate: String,
  },
  status: String,
  check_code: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  price: Number,
  driver_location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [Number, Number],
  },
});
