var KomfyKoin = artifacts.require("KomfyKoin.sol");
var KomfyKoinSale = artifacts.require("KomfyKoinSale.sol");
var KomfyKycContract = artifacts.require("KycContract");
require("dotenv").config({ path: "../.env" });
console.log(process.env);

module.exports = async function (deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(KomfyKoin, process.env.INITIAL_TOKENS);
    await deployer.deploy(KomfyKycContract);
    await deployer.deploy(KomfyKoinSale, 1, addr[0], KomfyKoin.address, KomfyKycContract.address);
    let instance = await KomfyKoin.deployed();
    await instance.transfer(KomfyKoinSale.address, process.env.INITIAL_TOKENS);
}