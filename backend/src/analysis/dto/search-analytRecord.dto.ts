import { ApiProperty } from '@nestjs/swagger';

export class SearchAnalytRecordDto {
  @ApiProperty({ example: 1 })
  guideId: number;

  @ApiProperty({ example: 1 })
  analytId: number;

  @ApiProperty({ example: 90 })
  dayMin: number;

  @ApiProperty({ example: 110 })
  dayMax: number;
}
