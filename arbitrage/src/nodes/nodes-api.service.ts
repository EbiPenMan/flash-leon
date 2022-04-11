import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { NodeApi } from "./entities/node-api.entity";

@Injectable()
export class NodesApiService {
  constructor(@InjectRepository(NodeApi) private nodeApiRepository: Repository<NodeApi>) {
  }

  async create(nodeApi: NodeApi): Promise<NodeApi> {
    return await this.nodeApiRepository.save(nodeApi);
  }

  async findAllBy(where: any): Promise<NodeApi[]> {
    return await this.nodeApiRepository.findBy(where);
  }

  async update(criteria: any , nodeApi: NodeApi): Promise<UpdateResult> {
    return await this.nodeApiRepository.update(criteria, nodeApi);
  }

  async delete(criteria: any): Promise<DeleteResult> {
    return await this.nodeApiRepository.delete(criteria);
  }

}
