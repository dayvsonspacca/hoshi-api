import { ApiProperty } from '@nestjs/swagger';

export class PlanetDto {
  @ApiProperty({ description: 'The planet name.', example: 'Earth' })
  planet_name: string;

  @ApiProperty({
    description: 'Float number to represent mass of the planet in kilograms.',
    example: '5.972e+24',
  })
  mass: number;

  @ApiProperty({
    description:
      'Float number to represent radius of the planet in kilometers.',
    example: '6371',
  })
  radius: number;

  @ApiProperty({
    description:
      'Float number to represent the diameter of the planet in kilometers.',
    example: '12742',
  })
  diameter: number;
}
