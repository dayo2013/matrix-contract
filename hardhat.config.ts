import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.etheruemsepolia,
      // @ts-ignore
      accounts: [process.env.privatekey]
    },
    // goerli: {
    //   url: process.env.GOERLI_RPC,
    //   // @ts-ignore
    //   accounts: [process.env.privatekey]
    // }
  },
  etherscan: {
    apiKey: process.env.apikey
  }
};

export default config;
