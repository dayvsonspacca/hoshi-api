import { Test, TestingModule } from '@nestjs/testing';
import { MoonService } from './moon.service';

describe('MoonService', () => {
  let service: MoonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoonService],
    }).compile();

    service = module.get<MoonService>(MoonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
