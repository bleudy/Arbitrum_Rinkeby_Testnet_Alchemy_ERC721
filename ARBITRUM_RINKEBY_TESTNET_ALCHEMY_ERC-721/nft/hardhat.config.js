/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
 solidity: "0.8.1",
 defaultNetwork: "arbitrum_rinkeby",
 networks: {
   hardhat: {},
   arbitrum_rinkeby: {
     chainId: 421611,
     url: API_URL,
     accounts: [`0x${PRIVATE_KEY}`],
   },
 },
};