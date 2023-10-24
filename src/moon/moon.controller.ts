import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ApiOkResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { MoonService } from './moon.service';
import { MoonDto } from './dtos/moon.dto';
import { MoonNotFoundDto } from './dtos/moon.notfound.dto';

@Controller('moon')
@ApiTags('moon')
export class MoonController {
  constructor(private moonService: MoonService) {}

  @Get(':moon_name')
  @ApiOkResponse({
    status: 200,
    description: 'The found moon.',
    type: MoonDto,
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Moon {moon_name} not found.',
    type: MoonNotFoundDto,
  })
  async getMoon(@Param() { moon_name }: { moon_name: string }, @Res() response: Response) {
    const moon = await this.moonService.getMoon(moon_name);

    if (moon) {
      return response.status(HttpStatus.OK).json(moon);
    }

    return response.status(HttpStatus.NOT_FOUND).json({
      message: `Moon {${moon_name}} not found.`,
      statusCode: HttpStatus.NOT_FOUND,
    });
  }
}
