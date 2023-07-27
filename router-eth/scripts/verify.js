const { BigNumber } = require("ethers");
const hre = require("hardhat");

const _weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

async function main() {
  await hre.run("verify:verify", {
    address: "0x6419c300aDB2C25a725111cE8D35a3994B782257",
    constructorArguments: [
      _weth,
      BigNumber.from(89).mul(BigNumber.from(10).pow(13)),
      "0x64961Ffd0d84b2355eC2B5d35B0d8D8825A774dc",
      "0xE1f1dd010BBC2860F81c8F90Ea4E38dB949BB16F",
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
