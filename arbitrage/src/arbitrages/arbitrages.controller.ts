import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ArbitragesService } from "./arbitrages.service";
import { Arbitrage } from "./entities/arbitrage.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnyModel } from "../app/models/any-model";
import { UpdateDto } from "../app/models/update-dto";

@ApiTags("arbitrages")
@Controller("arbitrages")
export class ArbitragesController {
  constructor(private readonly arbitragesService: ArbitragesService) {
  }

  @Post("create")
  @ApiResponse({ status: 200, type: Arbitrage })
  create(@Body() arbitrage: Arbitrage) {
    return this.arbitragesService.create(arbitrage);
  }

  @Post(["findAllBy"])
  @ApiResponse({ status: 200, type: Arbitrage, isArray: true })
  findAllBy(@Body() where: AnyModel): Promise<Arbitrage[]> {
    return this.arbitragesService.findAllBy(where);
  }

  @Patch("update")
  @ApiResponse({ status: 200, type: UpdateResult })
  update(@Body() updateDto: UpdateDto<Arbitrage>): Promise<UpdateResult> {
    return this.arbitragesService.update(updateDto.criteria, updateDto.data);
  }

  @Delete("delete")
  @ApiResponse({ status: 200, type: DeleteResult })
  delete(@Body() criteria: AnyModel): Promise<DeleteResult> {
    return this.arbitragesService.delete(criteria);
  }
}
