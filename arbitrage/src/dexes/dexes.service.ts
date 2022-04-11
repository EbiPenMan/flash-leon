import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dex } from "./entities/dex.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class DexesService {
  constructor(@InjectRepository(Dex) private contactRepository: Repository<Dex>) {
  }

  async create(dex: Dex): Promise<Dex> {
    return await this.contactRepository.save(dex);
  }

  async findAllBy(where: any): Promise<Dex[]> {
    return await this.contactRepository.findBy(where);
  }

  async update(criteria: any , dex: Dex): Promise<UpdateResult> {
    return await this.contactRepository.update(criteria, dex);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return await this.contactRepository.delete(criteria);
  }
}
