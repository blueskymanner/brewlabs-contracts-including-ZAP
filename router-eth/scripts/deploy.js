// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main() {
  const _weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const Aggregator = await hre.ethers.getContractFactory(
    "BrewlabsAggregationRouter"
  );
  const aggregator = await Aggregator.deploy(
    _weth,
    BigNumber.from(89).mul(BigNumber.from(10).pow(13)),
    "0x64961Ffd0d84b2355eC2B5d35B0d8D8825A774dc",
    "0xE1f1dd010BBC2860F81c8F90Ea4E38dB949BB16F"
  );
  await aggregator.deployed();
  console.log("Aggregator contract deployed...", aggregator.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
