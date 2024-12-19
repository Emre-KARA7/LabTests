import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalytRecordDto {
  @ApiProperty({ example: 1 })
  guideId: number;

  @ApiProperty({ example: 1 })
  analytId: number;

  @ApiProperty({ example: 90 })
  dayMin: number;

  @ApiProperty({ example: 110 })
  dayMax: number;

  @ApiProperty({ example: 1.5 })
  arithmeticMin: number;

  @ApiProperty({ example: 2.5 })
  arithmeticMax: number;

  @ApiProperty({ example: 1.8 })
  geometricMin: number;

  @ApiProperty({ example: 2.2 })
  geometricMax: number;

  @ApiProperty({ example: 1.5 })
  min: number;

  @ApiProperty({ example: 2.5 })
  max: number;
}
