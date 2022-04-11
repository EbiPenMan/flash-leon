import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PoolsService } from "./pools.service";
import { Pool } from "./entities/pool.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnyModel } from "../app/models/any-model";
import { UpdateDto } from "../app/models/update-dto";

@ApiTags("pools")
@Controller("pools")
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {
  }

  @Post("create")
  @ApiResponse({ status: 200, type: Pool })
  create(@Body() pool: Pool) {
    return this.poolsService.create(pool);
  }

  @Post(["findAllBy"])
  @ApiResponse({ status: 200, type: Pool, isArray: true })
  findAllBy(@Body() where: AnyModel): Promise<Pool[]> {
    return this.poolsService.findAllBy(where);
  }

  @Patch("update")
  @ApiResponse({ status: 200, type: UpdateResult })
  update(@Body() updateDto: UpdateDto<Pool>): Promise<UpdateResult> {
    return this.poolsService.update(updateDto.criteria, updateDto.data);
  }

  @Delete("delete")
  @ApiResponse({ status: 200, type: DeleteResult })
  delete(@Body() criteria: AnyModel): Promise<DeleteResult> {
    return this.poolsService.delete(criteria);
  }
}
