import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { DexesService } from "./dexes.service";
import { Dex } from "./entities/dex.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("dexes")
@Controller("dexes")
export class DexesController {
  constructor(private readonly dexesService: DexesService) {
  }

  @Post('create')
  @ApiResponse({
    status: 200,
    type: Dex
  })
  create(@Body() dex: Dex) {
    return this.dexesService.create(dex);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Dex,
    isArray: true
  })
  findAll(): Promise<Dex[]> {
    return this.dexesService.findAll();
  }

  @Get([":blockchain"])
  @ApiResponse({
    status: 200,
    type: Dex,
    isArray: true
  })
  findAllByBlockchain(
    @Param("blockchain") blockchain: string): Promise<Dex[]> {
    return this.dexesService.findAllByBlockchain(blockchain);
  }

  @Get(":blockchain/:network")
  @ApiResponse({
    status: 200,
    type: Dex,
    isArray: true
  })
  findAllByBlockchainAndNetwork(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string): Promise<Dex[]> {
    return this.dexesService.findAllByBlockchainAndNetwork(blockchain, network);
  }

  @Get(":blockchain/:network/:address")
  @ApiResponse({
    status: 200,
    type: Dex
  })
  findOne(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string,
    @Param("address") address: string): Promise<Dex> {
    return this.dexesService.findOne(blockchain, network, address);
  }

  @Patch("update")
  @ApiResponse({
    status: 200,
    type: UpdateResult
  })
  update(@Body() dex: Dex): Promise<UpdateResult> {
    return this.dexesService.update(dex);
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
    return this.dexesService.delete(blockchain, network, address);
  }
}
