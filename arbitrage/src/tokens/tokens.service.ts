import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Token } from "./entities/token.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class TokensService {
  constructor(@InjectRepository(Token) private contactRepository: Repository<Token>) {
  }

  async create(token: Token): Promise<Token> {
    return await this.contactRepository.save(token);
  }

  async findAllBy(where: any): Promise<Token[]> {
    return await this.contactRepository.findBy(where);
  }

  async update(criteria: any , token: Token): Promise<UpdateResult> {
    return await this.contactRepository.update(criteria, token);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return await this.contactRepository.delete(criteria);
  }
}
