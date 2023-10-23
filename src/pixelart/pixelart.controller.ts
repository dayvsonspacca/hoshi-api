import { Controller } from '@nestjs/common';
import { PixelArtService } from './pixelart.service';

@Controller('pixelart')
export class PixelartController {
    constructor(private readonly pixelArtService: PixelArtService) {}
}
