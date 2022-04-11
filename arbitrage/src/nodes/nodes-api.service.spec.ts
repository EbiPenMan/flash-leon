import { Test, TestingModule } from '@nestjs/testing';
import { NodesApiService } from './nodes-api.service';

describe('NodesApiService', () => {
  let service: NodesApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodesApiService],
    }).compile();

    service = module.get<NodesApiService>(NodesApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
