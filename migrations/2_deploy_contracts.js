var KomfyKoin = artifacts.require("KomfyKoin.sol");

module.exports = async function (deployer) {
    await deployer.deploy(KomfyKoin, 100000000);
}