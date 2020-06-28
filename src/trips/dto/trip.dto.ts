import { ApiProperty } from '@nestjs/swagger';
import { PointDateDTO } from './point-date.dto';
import { LocationDTO } from './location.dto';
import { NameDTO } from './name.dto';
import { PersonDTO } from './person.dto';
import { CarDTO } from './car.dto';
export class TripDTO {
  @ApiProperty()
  start: PointDateDTO;

  @ApiProperty()
  end: PointDateDTO;

  @ApiProperty()
  country: NameDTO;

  @ApiProperty()
  city: NameDTO;

  @ApiProperty()
  passenger: PersonDTO;

  @ApiProperty()
  driver: PersonDTO;

  @ApiProperty()
  car: CarDTO;

  @ApiProperty({ enum: ['onWay', 'near', 'started'] })
  status: string;

  @ApiProperty()
  check_code: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  price: number;

  @ApiProperty()
  driver_location: LocationDTO;
}
