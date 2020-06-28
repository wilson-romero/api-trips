import { LocationDTO } from './location.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PointDateDTO {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  pickup_address: string;

  @ApiProperty()
  pickup_location: LocationDTO;
}
