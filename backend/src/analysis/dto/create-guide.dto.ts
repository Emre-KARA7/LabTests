import { ApiProperty } from '@nestjs/swagger';

export class CreateGuideDto {
  @ApiProperty({ example: 'WHO child health guide' })
  name: string;
}
