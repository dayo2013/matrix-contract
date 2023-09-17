import { ethers } from "hardhat";

async function main() {
  const board = await ethers.deployContract("ColorBoard", []);
  await board.waitForDeployment();

  console.log("Board contract deployed to ", board.target);
  // 0xa5dBC7fa4891DE6248584628C36C926BDb861E2B - contract address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
