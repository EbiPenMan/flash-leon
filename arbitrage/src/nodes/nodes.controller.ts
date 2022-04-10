import {Controller, Get, Post, Body, Patch, Param, Delete} from "@nestjs/common";
import {NodesService} from "./nodes.service";
import {NodeApi} from "./entities/node-api.entity";
import {DeleteResult, UpdateResult} from "typeorm";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("nodes")
@Controller("nodes")
export class NodesController {
    constructor(private readonly nodesService: NodesService) {
    }

    @Post('create')
    @ApiResponse({
        status: 200,
        type: NodeApi
    })
    create(@Body() nodeApi: NodeApi) {
        return this.nodesService.create(nodeApi);
    }

    @Get()
    @ApiResponse({
        status: 200,
        type: NodeApi,
        isArray: true
    })
    findAll(): Promise<NodeApi[]> {
        return this.nodesService.findAll();
    }

    @Get([":blockchain"])
    @ApiResponse({
        status: 200,
        type: NodeApi,
        isArray: true
    })
    findAllByBlockchain(
        @Param("blockchain") blockchain: string): Promise<NodeApi[]> {
        return this.nodesService.findAllByBlockchain(blockchain);
    }

    @Get(":blockchain/:network")
    @ApiResponse({
        status: 200,
        type: NodeApi,
        isArray: true
    })
    findAllByBlockchainAndNetwork(
        @Param("blockchain") blockchain: string,
        @Param("network") network: string): Promise<NodeApi[]> {
        return this.nodesService.findAllByBlockchainAndNetwork(blockchain, network);
    }

    @Get(":blockchain/:network/:address")
    @ApiResponse({
        status: 200,
        type: NodeApi
    })
    findOne(
        @Param("blockchain") blockchain: string,
        @Param("network") network: string,
        @Param("address") address: string): Promise<NodeApi> {
        return this.nodesService.findOne(blockchain, network, address);
    }

    @Patch("update")
    @ApiResponse({
        status: 200,
        type: UpdateResult
    })
    update(@Body() nodeApi: NodeApi): Promise<UpdateResult> {
        return this.nodesService.update(nodeApi);
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
