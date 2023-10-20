import { ApiProperty } from '@nestjs/swagger';

export class MoonNotFoundDto {
  @ApiProperty({ example: 'Moon {example} not found.' })
  message: string;

  @ApiProperty({ default: 404 })
  status_code: number;
}
