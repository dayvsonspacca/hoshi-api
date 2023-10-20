import { ApiProperty } from '@nestjs/swagger';

export class MoonDto {
  @ApiProperty({ description: 'The name of the moon', example: 'Europa' })
  moon_name: string;

  @ApiProperty({
    description: 'Float number to represent mass of the moon in kilograms.',
    example: '5.972e+24',
  })
  mass: number;

  @ApiProperty({
    description: 'Float number to represent radius of the moon in kilometers.',
    example: '6371',
  })
  radius: number;

  @ApiProperty({
    description:
      'Float number to represent the diameter of the moon in kilometers.',
    example: '12742',
  })
  diameter: number;
}
