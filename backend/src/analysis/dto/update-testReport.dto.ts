import { PartialType } from '@nestjs/mapped-types';
import { CreateTestReportDto } from './create-testReport.dto ';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestReportDto extends PartialType(CreateTestReportDto) {
  @ApiProperty({ example: 1 })
  id: number;
}
