import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { TokensService } from "./tokens.service";
import { Token } from "./entities/token.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AnyModel } from "../app/models/any-model";
import { UpdateDto } from "../app/models/update-dto";

@ApiTags("tokens")
@Controller("tokens")
export class TokensController {
  constructor(private readonly tokensService: TokensService) {
  }

  @Post("create")
  @ApiResponse({ status: 200, type: Token })
  create(@Body() token: Token) {
    return this.tokensService.create(token);
  }

  @Post(["findAllBy"])
  @ApiResponse({ status: 200, type: Token, isArray: true })
  findAllBy(@Body() where: AnyModel): Promise<Token[]> {
    return this.tokensService.findAllBy(where);
  }

  @Patch("update")
  @ApiResponse({ status: 200, type: UpdateResult })
  update(@Body() updateDto: UpdateDto<Token>): Promise<UpdateResult> {
    return this.tokensService.update(updateDto.criteria, updateDto.data);
  }

  @Delete("delete")
  @ApiResponse({ status: 200, type: DeleteResult })
  delete(@Body() criteria: AnyModel): Promise<DeleteResult> {
    return this.tokensService.delete(criteria);
  }
}
