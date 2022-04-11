import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pool } from "./entities/pool.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class PoolsService {
  constructor(
    @InjectRepository(Pool)
    private contactRepository: Repository<Pool>
  ) {
  }

  async create(pool: Pool): Promise<Pool> {
    return await this.contactRepository.save(pool);
  }

  async findAll(): Promise<Pool[]> {
    return await this.contactRepository.find();
  }

  async findAllByBlockchain(
    blockchain: string
  ): Promise<Pool[]> {
    return await this.contactRepository.findBy({ blockchain: blockchain });
  }

  async findAllByBlockchainAndNetwork(
    blockchain: string,
    network: string
  ): Promise<Pool[]> {
    return await this.contactRepository.findBy({
      blockchain: blockchain,
      network: network
    });
  }

  async findOne(
    blockchain: string,
    network: string,
    address: string
  ): Promise<Pool> {
    return await this.contactRepository.findOneBy({
      blockchain: blockchain,
      network: network,
      address: address
    });
  }

  async update(
    pool: Pool
  ): Promise<UpdateResult> {
    return await this.contactRepository.update(
      {
        blockchain: pool.blockchain,
        network: pool.network,
        address: pool.address
      },
      pool
    );
  }

  async delete(
    blockchain: string,
    network: string,
    address: string
  ): Promise<DeleteResult> {
    return await this.contactRepository.delete(
      {
        blockchain: blockchain,
        network: network,
        address: address
      });
  }
}
