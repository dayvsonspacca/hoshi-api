import { ApiProperty } from '@nestjs/swagger';
import { MoonDto } from 'src/moon/dtos/moon.dto';

export class PlanetDto {
  @ApiProperty({ description: 'The planet name.', example: 'Earth' })
  planet_name: string;

  @ApiProperty({
    description: 'Float number to represent mass of the planet in kilograms.',
    example: '5.972e+24',
  })
  mass: number;

  @ApiProperty({
    description: 'Float number to represent radius of the planet in kilometers.',
    example: '6371',
  })
  radius: number;

  @ApiProperty({
    description: 'Float number to represent the diameter of the planet in kilometers.',
    example: '12742',
  })
  diameter: number;

  @ApiProperty({
    description: 'Time in days of the rotation moviment of the planet.',
    example: 365,
  })
  rotation_time: number;

  @ApiProperty({
    description: 'Time in days of the translation moviment of the planet.',
    example: 1,
  })
  translation_time: number;

  @ApiProperty({
    description: 'Planet moons array.',
    example: MoonDto,
  })
  moons: MoonDto;
}
