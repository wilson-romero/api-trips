import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TripSchema } from './schemas/trip.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Trip', schema: TripSchema }])],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}
