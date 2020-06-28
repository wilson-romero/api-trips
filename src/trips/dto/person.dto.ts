import { ApiProperty } from '@nestjs/swagger';

export class PersonDTO {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;
}
