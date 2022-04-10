import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NodeApi} from "./entities/node-api.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class NodesService {
    constructor(
        @InjectRepository(NodeApi)
        private contactRepository: Repository<NodeApi>
    ) {
    }

    async create(nodeApi: NodeApi): Promise<NodeApi> {
        return await this.contactRepository.save(nodeApi);
    }

    async findAll(): Promise<NodeApi[]> {
        return await this.contactRepository.find();
    }

    async findAllByBlockchain(
        blockchain: string
    ): Promise<NodeApi[]> {
        return await this.contactRepository.findBy({blockchain: blockchain});
    }

    async findAllByBlockchainAndNetwork(
        blockchain: string,
        network: string
    ): Promise<NodeApi[]> {
        return await this.contactRepository.findBy({
            blockchain: blockchain,
            network: network
        });
    }

    async findAllByBlockchainAndNetworkAndApiName(
        blockchain: string,
        network: string,
        apiName: string
    ): Promise<NodeApi[]> {
        return await this.contactRepository.findBy({
            blockchain: blockchain,
            network: network,
            apiName: apiName
        });
    }

    async findOne(
        blockchain: string,
        network: string,
        apiName: string,
        projectName: string
    ): Promise<NodeApi> {
        return await this.contactRepository.findOneBy({
            blockchain: blockchain,
            network: network,
            apiName: apiName,
            projectName: projectName
        });
    }

    async update(
        nodeApi: NodeApi
    ): Promise<UpdateResult> {
        return await this.contactRepository.update(
            {
                blockchain: nodeApi.blockchain,
                network: nodeApi.network,
                apiName: nodeApi.apiName,
                projectName: nodeApi.projectName
            },
            nodeApi
        );
    }

    async delete(
        blockchain: string,
        network: string,
        apiName: string,
        projectName: string
    ): Promise<DeleteResult> {
        return await this.contactRepository.delete(
            {
                blockchain: blockchain,
                network: network,
                apiName: apiName,
                projectName: projectName
            });
    }
}
