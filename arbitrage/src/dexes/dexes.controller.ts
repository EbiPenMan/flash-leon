import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { DexesService } from "./dexes.service";
import { Dex } from "./entities/dex.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnyModel } from "../app/models/any-model";
import { UpdateDto } from "../app/models/update-dto";

@ApiTags("dexes")
@Controller("dexes")
export class DexesController {
  constructor(private readonly dexesService: DexesService) {
  }

  @Post("create")
  @ApiResponse({ status: 200, type: Dex })
  create(@Body() dex: Dex) {
    return this.dexesService.create(dex);
  }

  @Post(["findAllBy"])
  @ApiResponse({ status: 200, type: Dex, isArray: true })
  findAllBy(@Body() where: AnyModel): Promise<Dex[]> {
    return this.dexesService.findAllBy(where);
  }

  @Patch("update")
  @ApiResponse({ status: 200, type: UpdateResult })
  update(@Body() updateDto: UpdateDto<Dex>): Promise<UpdateResult> {
    return this.dexesService.update(updateDto.criteria, updateDto.data);
  }

  @Delete("delete")
  @ApiResponse({ status: 200, type: DeleteResult })
  delete(@Body() criteria: AnyModel): Promise<DeleteResult> {
    return this.dexesService.delete(criteria);
  }
}
