require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const MAINNET_PRIVATE_KEY = "";
const ETHERSCAN_API_KEY = "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
  networks: {
    bsc: {
      url: `https://bsc-dataseed1.binance.org`,
      accounts: [`${MAINNET_PRIVATE_KEY}`]
    }
  }
};
