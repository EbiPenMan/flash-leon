import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokensModule } from '../tokens/tokens.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoolsModule } from "../pools/pools.module";
import { DexesModule } from "../dexes/dexes.module";
import { NodesApiModule } from "../nodes/nodes-api.module";

@Module({
  imports: [
    TokensModule,
    PoolsModule,
    DexesModule,
    NodesApiModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
