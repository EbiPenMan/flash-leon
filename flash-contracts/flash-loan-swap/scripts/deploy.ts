// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PairFlash = await ethers.getContractFactory("PairFlash");
  const V3router = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
  const factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984';
  const weth9 = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270';

  const greeter = await PairFlash.deploy(V3router,factory,weth9);

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
