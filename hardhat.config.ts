import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const TESTNET_RPC = process.env.TESTNET_RPC as string;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: TESTNET_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};

export default config;
