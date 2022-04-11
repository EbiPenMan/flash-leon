import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Arbitrage } from "./entities/arbitrage.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class ArbitragesService {
  constructor(@InjectRepository(Arbitrage) private contactRepository: Repository<Arbitrage>) {
  }

  async create(arbitrage: Arbitrage): Promise<Arbitrage> {
    return await this.contactRepository.save(arbitrage);
  }

  async findAllBy(where: any): Promise<Arbitrage[]> {
    return await this.contactRepository.findBy(where);
  }

  async update(criteria: any , arbitrage: Arbitrage): Promise<UpdateResult> {
    return await this.contactRepository.update(criteria, arbitrage);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return await this.contactRepository.delete(criteria);
  }
}
