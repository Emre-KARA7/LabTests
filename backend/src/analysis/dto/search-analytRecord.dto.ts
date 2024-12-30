import { ApiProperty } from '@nestjs/swagger';

export class SearchAnalytRecordDto {
  @ApiProperty({ example: 1, required: false })
  guideId?: number;

  @ApiProperty({ example: 1, required: false })
  analytId?: number;

  @ApiProperty({ example: 90, required: false })
  dayMin?: number;

  @ApiProperty({ example: 110, required: false })
  dayMax?: number;
}
