import { Test, TestingModule } from '@nestjs/testing';
import { ArbitragesController } from './arbitrages.controller';
import { ArbitragesService } from './arbitrages.service';

describe('ArbitragesController', () => {
  let controller: ArbitragesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArbitragesController],
      providers: [ArbitragesService],
    }).compile();

    controller = module.get<ArbitragesController>(ArbitragesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
