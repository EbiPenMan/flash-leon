import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Node } from "./entities/node.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(Node)
    private contactRepository: Repository<Node>
  ) {
  }

  async create(node: Node): Promise<Node> {
    return await this.contactRepository.save(node);
  }

  async findAll(): Promise<Node[]> {
    return await this.contactRepository.find();
  }

  async findAllByBlockchain(
    blockchain: string
  ): Promise<Node[]> {
    return await this.contactRepository.findBy({ blockchain: blockchain });
  }

  async findAllByBlockchainAndNetwork(
    blockchain: string,
    network: string
  ): Promise<Node[]> {
    return await this.contactRepository.findBy({
      blockchain: blockchain,
      network: network
    });
  }

  async findOne(
    blockchain: string,
    network: string,
    address: string
  ): Promise<Node> {
    return await this.contactRepository.findOneBy({
      blockchain: blockchain,
      network: network,
      address: address
    });
  }

  async update(
    node: Node
  ): Promise<UpdateResult> {
    return await this.contactRepository.update(
      {
        blockchain: node.blockchain,
        network: node.network,
        address: node.address
      },
      node
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
