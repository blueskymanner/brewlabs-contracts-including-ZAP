const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    address: "0x4E0ee5a50e39f7e42d971dE53736129e52a5b0Ab",
    constructorArguments: [
      BigNumber.from(35).mul(BigNumber.from(10).pow(14)),
      "0x408c4aDa67aE1244dfeC7D609dea3c232843189A",
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
