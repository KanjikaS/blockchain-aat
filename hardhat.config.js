require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = "https://ethereum-sepolia-rpc.publicnode.com/";
const PRIVATE_KEY = "6912a969e3b7d3a814f1b788148c936ea5ddb9ac8ec91ea2de925f982dd41aae";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
