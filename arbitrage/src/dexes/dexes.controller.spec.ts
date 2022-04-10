import { Test, TestingModule } from '@nestjs/testing';
import { DexesController } from './dexes.controller';
import { DexesService } from './dexes.service';

describe('DexesController', () => {
  let controller: DexesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DexesController],
      providers: [DexesService],
    }).compile();

    controller = module.get<DexesController>(DexesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
