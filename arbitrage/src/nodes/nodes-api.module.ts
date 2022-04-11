import { Module } from '@nestjs/common';
import { NodesApiService } from './nodes-api.service';
import { NodesApiController } from './nodes-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NodeApi } from "./entities/node-api.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NodeApi])],
  controllers: [NodesApiController],
  providers: [NodesApiService],
})
export class NodesApiModule {}
