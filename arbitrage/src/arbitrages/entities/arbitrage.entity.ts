import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Arbitrage {
  @PrimaryColumn({ type: "varchar", name: "blockchain" })
  @ApiProperty({ example: "bsc" })
  blockchain: string;

  @PrimaryColumn({ type: "varchar", name: "network" })
  @ApiProperty({ example: "mainnet" })
  network: string;

  @PrimaryColumn({ type: "varchar", name: "address" })
  @ApiProperty({ example: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" })
  address: string;

  @Column({ type: "varchar", nullable: true})
  @ApiProperty({ example: "Wrapped BNB" })
  name: string;

  @Column({ type: "varchar", nullable: true})
  @ApiProperty({ example: "WBNB" })
  symbol: string;

  @Column({ type: "int", nullable: true})
  @ApiProperty({ example: "18" })
  decimals: number;

  @Column({ type: "varchar", nullable: true})
  @ApiProperty({ example: "BEP-20" })
  type: string;
}
