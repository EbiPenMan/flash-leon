import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { NodesService } from "./nodes.service";
import { Node } from "./entities/node.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("nodes")
@Controller("nodes")
export class NodesController {
  constructor(private readonly nodesService: NodesService) {
  }

  @Post('create')
  @ApiResponse({
    status: 200,
    type: Node
  })
  create(@Body() node: Node) {
    return this.nodesService.create(node);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: Node,
    isArray: true
  })
  findAll(): Promise<Node[]> {
    return this.nodesService.findAll();
  }

  @Get([":blockchain"])
  @ApiResponse({
    status: 200,
    type: Node,
    isArray: true
  })
  findAllByBlockchain(
    @Param("blockchain") blockchain: string): Promise<Node[]> {
    return this.nodesService.findAllByBlockchain(blockchain);
  }

  @Get(":blockchain/:network")
  @ApiResponse({
    status: 200,
    type: Node,
    isArray: true
  })
  findAllByBlockchainAndNetwork(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string): Promise<Node[]> {
    return this.nodesService.findAllByBlockchainAndNetwork(blockchain, network);
  }

  @Get(":blockchain/:network/:address")
  @ApiResponse({
    status: 200,
    type: Node
  })
  findOne(
    @Param("blockchain") blockchain: string,
    @Param("network") network: string,
    @Param("address") address: string): Promise<Node> {
    return this.nodesService.findOne(blockchain, network, address);
  }

  @Patch("update")
  @ApiResponse({
    status: 200,
    type: UpdateResult
  })
  update(@Body() node: Node): Promise<UpdateResult> {
    return this.nodesService.update(node);
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
    return this.nodesService.delete(blockchain, network, address);
  }
}
