import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Token } from "./entities/token.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private contactRepository: Repository<Token>
  ) {
  }

  async create(token: Token): Promise<Token> {
    return await this.contactRepository.save(token);
  }

  async findAll(): Promise<Token[]> {
    return await this.contactRepository.find();
  }

  async findAllByBlockchain(
    blockchain: string
  ): Promise<Token[]> {
    return await this.contactRepository.findBy({ blockchain: blockchain });
  }

  async findAllByBlockchainAndNetwork(
    blockchain: string,
    network: string
  ): Promise<Token[]> {
    return await this.contactRepository.findBy({
      blockchain: blockchain,
      network: network
    });
  }

  async findOne(
    blockchain: string,
    network: string,
    address: string
  ): Promise<Token> {
    return await this.contactRepository.findOneBy({
      blockchain: blockchain,
      network: network,
      address: address
    });
  }

  async update(
    token: Token
  ): Promise<UpdateResult> {
    return await this.contactRepository.update(
      {
        blockchain: token.blockchain,
        network: token.network,
        address: token.address
      },
      token
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
