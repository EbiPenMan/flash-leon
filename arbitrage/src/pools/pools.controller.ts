import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PoolsService } from "./pools.service";
import { Pool } from "./entities/pool.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("pools")
@Controller("pools")
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {
  }

  @Post('create')
  @ApiResponse({
    status: 200,
    type: Pool
  })
  create(@Body() pool: Pool) {
    return this.poolsService.create(pool);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Pool,
    isArray: true
  })
  findAll(): Promise<Pool[]> {
    return this.poolsService.findAll();
  }

  @Get([":blockchain"])
  @ApiResponse({
    status: 200,
    type: Pool,
    isArray: true
  })
  findAllByBlockchain(
    @Param("blockchain") blockchain: string): Promise<Pool[]> {
    return this.poolsService.findAllByBlockchain(blockchain);
  }

  @Get(":blockchain/:network")
  @ApiResponse({
    status: 200,
    type: Pool,
    isArray: true
  })
  findAllByBlockchainAndNetwork(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string): Promise<Pool[]> {
    return this.poolsService.findAllByBlockchainAndNetwork(blockchain, network);
  }

  @Get(":blockchain/:network/:address")
  @ApiResponse({
    status: 200,
    type: Pool
  })
  findOne(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string,
    @Param("address") address: string): Promise<Pool> {
    return this.poolsService.findOne(blockchain, network, address);
  }

  @Patch("update")
  @ApiResponse({
    status: 200,
    type: UpdateResult
  })
  update(@Body() pool: Pool): Promise<UpdateResult> {
    return this.poolsService.update(pool);
  }

  @Delete(":blockchain/:network/:address/delete")
  @ApiResponse({
    status: 200,
    type: DeleteResult
  })
  delete(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string,
    @Param("address") address: string
  ): Promise<DeleteResult> {
    return this.poolsService.delete(blockchain, network, address);
  }
}
