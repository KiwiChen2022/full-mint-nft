const hre = require("hardhat");

async function main() {
  const RandomNFT = await hre.ethers.getContractFactory("RandomNFT");
  //   const randomNFT = await RandomNFT.deploy();

  //   await randomNFT.deployed();

  const randomNFT = await hre.ethers.deployContract("RandomNFT");

  await randomNFT.waitForDeployment();
  console.log("RandomNFT deployed to: ", randomNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
