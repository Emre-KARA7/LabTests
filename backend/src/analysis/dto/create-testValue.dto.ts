import { ApiProperty } from '@nestjs/swagger';

export class CreateTestValueDto {
  @ApiProperty({ example: 1 })
  analytId: number;

  @ApiProperty({ example: 1 })
  testReportId: number;

  @ApiProperty({ example: 1.55 })
  value: number;

  @ApiProperty({ example: 'pathetic' })
  expertOpinion: string;
}
