import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dex } from "./entities/dex.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class DexesService {
  constructor(
    @InjectRepository(Dex)
    private contactRepository: Repository<Dex>
  ) {
  }

  async create(dex: Dex): Promise<Dex> {
    return await this.contactRepository.save(dex);
  }

  async findAll(): Promise<Dex[]> {
    return await this.contactRepository.find();
  }

  async findAllByBlockchain(
    blockchain: string
  ): Promise<Dex[]> {
    return await this.contactRepository.findBy({ blockchain: blockchain });
  }

  async findAllByBlockchainAndNetwork(
    blockchain: string,
    network: string
  ): Promise<Dex[]> {
    return await this.contactRepository.findBy({
      blockchain: blockchain,
      network: network
    });
  }

  async findOne(
    blockchain: string,
    network: string,
    address: string
  ): Promise<Dex> {
    return await this.contactRepository.findOneBy({
      blockchain: blockchain,
      network: network,
      address: address
    });
  }

  async update(
    dex: Dex
  ): Promise<UpdateResult> {
    return await this.contactRepository.update(
      {
        blockchain: dex.blockchain,
        network: dex.network,
        address: dex.address
      },
      dex
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
