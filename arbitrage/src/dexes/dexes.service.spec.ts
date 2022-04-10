import { Test, TestingModule } from '@nestjs/testing';
import { DexesService } from './dexes.service';

describe('DexesService', () => {
  let service: DexesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DexesService],
    }).compile();

    service = module.get<DexesService>(DexesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
