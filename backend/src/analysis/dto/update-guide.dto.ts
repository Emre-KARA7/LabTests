import { PartialType } from '@nestjs/mapped-types';
import { CreateGuideDto } from './create-guide.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGuideDto extends PartialType(CreateGuideDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
