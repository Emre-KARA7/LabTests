import { ApiProperty } from '@nestjs/swagger';

export class CreateTestReportDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '2021-10-10T10:00:00' })
  examinationRequestTime: Date;

  @ApiProperty({ example: '2021-10-10T10:00:00' })
  samplingTime: Date;

  @ApiProperty({ example: '2021-10-10T10:00:00' })
  sampleAcceptanceTime: Date;

  @ApiProperty({ example: '2021-10-10T10:00:00' })
  expertApprovalTime: Date;
}
