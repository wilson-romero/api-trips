import { Document } from 'mongoose';

export interface Trip extends Document {
  start: {
    date: Date;
    pickup_address: string;
    pickup_location: {
      type: {
        type: string;
      };
      coordinates: [number, number];
    };
  };
  end: {
    date: Date;
    pickup_address: string;
    pickup_location: {
      type: {
        type: string;
      };
      coordinates: [number, number];
    };
  };
  country: {
    name: string;
  };
  city: {
    name: string;
  };
  passenger: {
    first_name: string;
    last_name: string;
  };
  driver: {
    first_name: string;
    last_name: string;
  };
  car: {
    plate: string;
  };
  status: string;
  check_code: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  driver_location: {
    type: {
      type: string;
    };
    coordinates: [number, number];
  };
}
