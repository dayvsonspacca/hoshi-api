import { ApiProperty } from '@nestjs/swagger';

export class PlanetNotFoundDto {
  @ApiProperty({ example: 'Planet {example} not found.' })
  message: string;

  @ApiProperty({ default: 404 })
  status_code: number;
}
