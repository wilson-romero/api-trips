import { ApiProperty } from '@nestjs/swagger';

export class NameDTO {
  @ApiProperty()
  name: string;
}
