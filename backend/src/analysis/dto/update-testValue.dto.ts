import { PartialType } from '@nestjs/mapped-types';
import { CreateTestValueDto } from './create-testValue.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestValueDto extends PartialType(CreateTestValueDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
