import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalytDto {
  @ApiProperty({ example: 'Fe' })
  name: string;
}
