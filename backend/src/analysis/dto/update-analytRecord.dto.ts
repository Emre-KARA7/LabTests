import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalytRecordDto } from './create-analytRecord.dto';

export class UpdateAnalytRecordDto extends PartialType(CreateAnalytRecordDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
