import { Test, TestingModule } from '@nestjs/testing';
import { NodesApiController } from './nodes-api.controller';
import { NodesApiService } from './nodes-api.service';

describe('NodesApiController', () => {
  let controller: NodesApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodesApiController],
      providers: [NodesApiService],
    }).compile();

    controller = module.get<NodesApiController>(NodesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
