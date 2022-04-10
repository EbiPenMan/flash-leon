import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class NodeApi {
  @PrimaryColumn({ type: "varchar", name: "blockchain" })
  @ApiProperty({ example: "bsc" })
  blockchain: string;

  @PrimaryColumn({ type: "varchar", name: "network" })
  @ApiProperty({ example: "mainnet" })
  network: string;

  @Column({ type: "varchar"})
  @ApiProperty({ example: "getblock.io" })
  apiName: string;

  @Column({ type: "varchar", nullable: true})
  @ApiProperty({ example: "Production" })
  projectName: string;

  @Column({ type: "varchar"})
  @ApiProperty({ example: "https://bsc.getblock.io/mainnet/?api_key=9e4c3936-72d9-431e-992d-6f34c02ac4ea" })
  rpcUrl: string;

  @Column({ type: "varchar"})
  @ApiProperty({ example: "wss://bsc.getblock.io/mainnet/?api_key=9e4c3936-72d9-431e-992d-6f34c02ac4ea" })
  websocketUrl: string;


}
