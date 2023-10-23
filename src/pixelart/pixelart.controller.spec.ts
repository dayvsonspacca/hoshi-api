import { Test, TestingModule } from '@nestjs/testing';
import { PixelartController } from './pixelart.controller';

describe('PixelartController', () => {
  let controller: PixelartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PixelartController],
    }).compile();

    controller = module.get<PixelartController>(PixelartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
