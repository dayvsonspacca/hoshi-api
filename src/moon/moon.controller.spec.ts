import { Test, TestingModule } from '@nestjs/testing';
import { MoonController } from './moon.controller';

describe('MoonController', () => {
  let controller: MoonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoonController],
    }).compile();

    controller = module.get<MoonController>(MoonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
