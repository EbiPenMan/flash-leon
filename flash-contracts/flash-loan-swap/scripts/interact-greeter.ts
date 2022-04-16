/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { ethers } from "hardhat";

async function main() {
  const address = "0x6D02ABC5fa967B0b085083F5Cf36c24502447244";
  const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  const greeter = await new ethers.Contract(address,abi);

  console.error(await greeter.greet());
  console.error(await greeter.setGreeting("Hi my name is ebi"));
  console.error(await greeter.greet());
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
