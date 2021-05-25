var KomfyKoin = artifacts.require("KomfyKoin.sol");
var KomfyKoinSale = artifacts.require("KomfyKoinSale");

module.exports = async function (deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(KomfyKoin, 100000000);
    await deployer.deploy(KomfyKoinSale, 1, addr[0], KomfyKoin.address);
    let instance = KomfyKoin.deployed();
    await instance.transfer(KomfyKoinSale.address, 100000000);
}