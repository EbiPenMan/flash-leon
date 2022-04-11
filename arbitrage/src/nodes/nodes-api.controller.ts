import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { NodesApiService } from "./nodes-api.service";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnyModel } from "../app/models/any-model";
import { UpdateDto } from "../app/models/update-dto";
import { NodeApi } from "./entities/node-api.entity";

@ApiTags("node-api")
@Controller("node-api")
export class NodesApiController {
    constructor(private readonly nodesApiService: NodesApiService) {
    }

    @Post("create")
    @ApiResponse({ status: 200, type: NodeApi })
    create(@Body() nodeApi: NodeApi) {
        return this.nodesApiService.create(nodeApi);
    }

    @Post(["findAllBy"])
    @ApiResponse({ status: 200, type: NodeApi, isArray: true })
    findAllBy(@Body() where: AnyModel): Promise<NodeApi[]> {
        return this.nodesApiService.findAllBy(where);
    }

    @Patch("update")
    @ApiResponse({ status: 200, type: UpdateResult })
    update(@Body() updateDto: UpdateDto<NodeApi>): Promise<UpdateResult> {
        return this.nodesApiService.update(updateDto.criteria, updateDto.data);
    }

    @Delete("delete")
    @ApiResponse({ status: 200, type: DeleteResult })
    delete(@Body() criteria: AnyModel): Promise<DeleteResult> {
        return this.nodesApiService.delete(criteria);
    }
}
