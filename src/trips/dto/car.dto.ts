import { ApiProperty } from '@nestjs/swagger';

export class CarDTO {
  @ApiProperty()
  plate: string;
}
