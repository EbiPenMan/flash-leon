import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pool } from "./entities/pool.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class PoolsService {
  constructor(@InjectRepository(Pool) private contactRepository: Repository<Pool>) {
  }

  async create(pool: Pool): Promise<Pool> {
    return await this.contactRepository.save(pool);
  }

  async findAllBy(where: any): Promise<Pool[]> {
    return await this.contactRepository.findBy(where);
  }

  async update(criteria: any , pool: Pool): Promise<UpdateResult> {
    return await this.contactRepository.update(criteria, pool);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return await this.contactRepository.delete(criteria);
  }
}
