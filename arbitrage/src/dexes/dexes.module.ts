import { Module } from '@nestjs/common';
import { DexesService } from './dexes.service';
import { DexesController } from './dexes.controller';
import { Dex } from './entities/dex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dex])],
  controllers: [DexesController],
  providers: [DexesService],
})
export class DexesModule {}
