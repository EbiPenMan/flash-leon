import { Module } from '@nestjs/common';
import { ArbitragesService } from './arbitrages.service';
import { ArbitragesController } from './arbitrages.controller';
import { Arbitrage } from './entities/arbitrage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Arbitrage])],
  controllers: [ArbitragesController],
  providers: [ArbitragesService],
})
export class ArbitragesModule {}
