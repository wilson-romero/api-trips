import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TripsModule,
    MongooseModule.forRoot(
      'mongodb+srv://mark:6p3clamAb_JN%7D%40Rv%23Kd%60%60%23bb@cluster0-i7r1k.mongodb.net/challenge?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
