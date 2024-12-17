import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalytDto } from './create-analyt.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnalytDto extends PartialType(CreateAnalytDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
