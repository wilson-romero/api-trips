import { ApiProperty } from '@nestjs/swagger';

export class LocationDTO {
  @ApiProperty({ type: String, default: 'Point' })
  type: {
    type: string;
  };

  @ApiProperty({ type: [Number, Number], default: [0, 0] })
  coordinates: [number, number];
}
