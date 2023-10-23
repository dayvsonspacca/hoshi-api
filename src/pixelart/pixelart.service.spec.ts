import { Test, TestingModule } from '@nestjs/testing';
import { PixelArtService } from './pixelart.service';

describe('PixelartService', () => {
  let service: PixelArtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixelArtService],
    }).compile();

    service = module.get<PixelArtService>(PixelArtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
