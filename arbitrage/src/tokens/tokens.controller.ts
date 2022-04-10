import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { TokensService } from "./tokens.service";
import { Token } from "./entities/token.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("tokens")
@Controller("tokens")
export class TokensController {
  constructor(private readonly tokensService: TokensService) {
  }

  @Post('create')
  @ApiResponse({
    status: 200,
    type: Token
  })
  create(@Body() token: Token) {
    return this.tokensService.create(token);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Token,
    isArray: true
  })
  findAll(): Promise<Token[]> {
    return this.tokensService.findAll();
  }

  @Get([":blockchain"])
  @ApiResponse({
    status: 200,
    type: Token,
    isArray: true
  })
  findAllByBlockchain(
    @Param("blockchain") blockchain: string): Promise<Token[]> {
    return this.tokensService.findAllByBlockchain(blockchain);
  }

  @Get(":blockchain/:network")
  @ApiResponse({
    status: 200,
    type: Token,
    isArray: true
  })
  findAllByBlockchainAndNetwork(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string): Promise<Token[]> {
    return this.tokensService.findAllByBlockchainAndNetwork(blockchain, network);
  }

  @Get(":blockchain/:network/:address")
  @ApiResponse({
    status: 200,
    type: Token
  })
  findOne(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string,
    @Param("address") address: string): Promise<Token> {
    return this.tokensService.findOne(blockchain, network, address);
  }

  @Patch("update")
  @ApiResponse({
    status: 200,
    type: UpdateResult
  })
  update(@Body() token: Token): Promise<UpdateResult> {
    return this.tokensService.update(token);
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
    return this.tokensService.delete(blockchain, network, address);
  }
}
