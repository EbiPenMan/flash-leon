import { Test, TestingModule } from '@nestjs/testing';
import { ArbitragesService } from './arbitrages.service';

describe('ArbitragesService', () => {
  let service: ArbitragesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArbitragesService],
    }).compile();

    service = module.get<ArbitragesService>(ArbitragesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
